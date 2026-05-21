import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import youtubedl from 'youtube-dl-exec';
import ffmpegPath from 'ffmpeg-static';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Downloads temp folder (auto-created)
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Log ffmpeg path
console.log(`[INIT] ffmpeg path: ${ffmpegPath}`);

// CORS – allow frontend origin
app.use(cors({ origin: 'http://localhost:3000' }));

// Rate limiting – 30 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again after a minute.' },
});
app.use(limiter);

// ──────────────────────────────────────────────
// Helper: extract YouTube video ID from a URL
// ──────────────────────────────────────────────
function extractYouTubeId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtube.com') && parsed.searchParams.has('v')) {
      return parsed.searchParams.get('v');
    }
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1);
    }
    if (parsed.hostname.includes('youtube.com') && parsed.pathname.startsWith('/shorts/')) {
      return parsed.pathname.split('/shorts/')[1].split('/')[0];
    }
    return null;
  } catch {
    return null;
  }
}

// ──────────────────────────────────────────────
// GET /api/info?url=<youtube_url>
// Returns video metadata and clean format options
// ──────────────────────────────────────────────
app.get('/api/info', async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'Missing required query parameter: url' });
    }

    const videoId = extractYouTubeId(url);
    if (!videoId) {
      return res.status(400).json({ error: 'Invalid YouTube URL.' });
    }

    console.log(`[INFO] Fetching info for: ${url}`);

    // Fetch full video info via yt-dlp
    const info = await youtubedl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      ffmpegLocation: path.relative(process.cwd(), ffmpegPath),
    });

    // ── Parse real format data from yt-dlp ──
    const allFormats = info.formats || [];

    // Find the best M4A audio stream size (M4A = AAC, which guarantees playback in MP4)
    const audioStreams = allFormats
      .filter(f => f.vcodec === 'none' && f.acodec !== 'none' && f.ext === 'm4a')
      .sort((a, b) => (b.filesize || b.filesize_approx || 0) - (a.filesize || a.filesize_approx || 0));
    const bestAudioSize = audioStreams.length > 0
      ? (audioStreams[0].filesize || audioStreams[0].filesize_approx || 0)
      : 0;

    // For each target resolution, find the best matching video format and compute real file size
    const qualityMap = [
      { height: 2160, label: '4K (2160p)' },
      { height: 1440, label: '2K (1440p)' },
      { height: 1080, label: '1080p HD' },
      { height: 720,  label: '720p' },
      { height: 480,  label: '480p' },
      { height: 360,  label: '360p' },
    ];

    const videoFormats = [];
    const seenHeights = new Set();

    for (const q of qualityMap) {
      // Find the best video-only format at this height
      const matchingVideo = allFormats
        .filter(f => f.height && f.height <= q.height && f.vcodec !== 'none')
        .sort((a, b) => (b.height || 0) - (a.height || 0) || (b.filesize || b.filesize_approx || 0) - (a.filesize || a.filesize_approx || 0));

      if (matchingVideo.length === 0) continue;

      const bestMatch = matchingVideo[0];
      const actualHeight = bestMatch.height;

      // Skip duplicate actual heights
      if (seenHeights.has(actualHeight)) continue;
      seenHeights.add(actualHeight);

      const videoSize = bestMatch.filesize || bestMatch.filesize_approx || 0;
      const totalSize = videoSize + bestAudioSize; // real video size + real m4a size

      videoFormats.push({
        formatId: `bestvideo[height<=${q.height}]+bestaudio[ext=m4a]/best[height<=${q.height}]`,
        quality: `${q.label} — Video + Audio`,
        ext: 'mp4',
        filesize: totalSize > 0 ? totalSize : null,
      });
    }

    // Audio-only option
    // For the dedicated MP3 download, we can use bestaudio overall (since ffmpeg will convert it to MP3 anyway)
    const bestAnyAudioStream = allFormats
      .filter(f => f.vcodec === 'none' && f.acodec !== 'none')
      .sort((a, b) => (b.filesize || b.filesize_approx || 0) - (a.filesize || a.filesize_approx || 0));
    const bestAnyAudioSize = bestAnyAudioStream.length > 0 
      ? (bestAnyAudioStream[0].filesize || bestAnyAudioStream[0].filesize_approx || 0)
      : 0;

    const audioFormats = [{
      formatId: 'bestaudio/best',
      quality: 'MP3 Audio (Best Quality)',
      ext: 'mp3',
      filesize: bestAnyAudioSize > 0 ? bestAnyAudioSize : null,
      audioOnly: true,
    }];

    console.log(`[INFO] Found: "${info.title}" — ${videoFormats.length} video + ${audioFormats.length} audio formats`);

    return res.json({
      title: info.title,
      thumbnail: info.thumbnail,
      duration: info.duration,
      author: info.uploader || info.channel,
      views: info.view_count,
      platform: 'youtube',
      videoId,
      formats: [...videoFormats, ...audioFormats],
    });
  } catch (err) {
    console.error('[INFO ERROR]', err.message);
    return res.status(500).json({ error: err.message || 'Failed to fetch video info' });
  }
});

// ──────────────────────────────────────────────
// GET /api/download?url=<youtube_url>&formatId=<yt-dlp format string>
// Downloads the video/audio and streams the file back
// ──────────────────────────────────────────────
app.get('/api/download', async (req, res) => {
  try {
    const { url, formatId } = req.query;

    if (!url || !formatId) {
      return res.status(400).json({ error: 'Missing required query parameters: url, formatId' });
    }

    console.log(`[DOWNLOAD] Starting: format="${formatId}" url="${url}"`);

    // Create a unique subfolder for this download
    const jobId = uuidv4();
    const jobDir = path.join(downloadsDir, jobId);
    fs.mkdirSync(jobDir, { recursive: true });

    const isAudio = formatId.startsWith('bestaudio');
    
    // Use relative path to avoid spaces in the command line arguments
    const relativeJobDir = path.relative(process.cwd(), jobDir);
    const outputTemplate = path.join(relativeJobDir, '%(title)s.%(ext)s');

    // Build yt-dlp options
    const opts = {
      format: formatId,
      output: outputTemplate,
      noCheckCertificates: true,
      noWarnings: true,
      ffmpegLocation: path.relative(process.cwd(), ffmpegPath),
    };

    if (isAudio) {
      // Extract audio and convert to MP3
      opts.extractAudio = true;
      opts.audioFormat = 'mp3';
      opts.audioQuality = '0'; // 0 = best VBR quality (~320kbps)
    } else {
      // Merge video + audio into MP4
      opts.mergeOutputFormat = 'mp4';
    }

    await youtubedl(url, opts);

    // Find the downloaded file
    const files = fs.readdirSync(jobDir);
    if (files.length === 0) {
      fs.rmSync(jobDir, { recursive: true, force: true });
      return res.status(500).json({ error: 'Download completed but no file was found' });
    }

    const downloadedFile = path.join(jobDir, files[0]);
    const fileName = files[0];

    console.log(`[DOWNLOAD] Complete: ${fileName} (${(fs.statSync(downloadedFile).size / 1024 / 1024).toFixed(1)} MB)`);

    // Send the file to the client
    res.download(downloadedFile, fileName, (err) => {
      if (err && !res.headersSent) {
        console.error('[DOWNLOAD] Send error:', err.message);
      }
      // Clean up after 2 minutes
      setTimeout(() => {
        try {
          if (fs.existsSync(jobDir)) {
            fs.rmSync(jobDir, { recursive: true, force: true });
            console.log(`[CLEANUP] Removed: ${jobId}`);
          }
        } catch (cleanupErr) {
          console.error('[CLEANUP ERROR]', cleanupErr.message);
        }
      }, 2 * 60 * 1000);
    });
  } catch (err) {
    console.error('[DOWNLOAD ERROR]', err.message);
    if (err.stderr) console.error('[DOWNLOAD STDERR]', err.stderr);
    if (err.stack) console.error('[DOWNLOAD STACK]', err.stack);
    return res.status(500).json({ error: err.message || 'Failed to download video' });
  }
});

// ──────────────────────────────────────────────
// Start server
// ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🚀 StreamGrab Backend running on http://localhost:${PORT}`);
  console.log(`   ffmpeg: ${ffmpegPath}`);
  console.log(`   Endpoints:`);
  console.log(`   GET /api/info?url=<youtube_url>`);
  console.log(`   GET /api/download?url=<youtube_url>&formatId=<format>\n`);
});

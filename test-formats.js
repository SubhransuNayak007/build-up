import youtubedl from 'youtube-dl-exec';

async function test() {
  const url = 'https://www.youtube.com/watch?v=LXb3EKWsInQ'; // 4K video
  const info = await youtubedl(url, {
    dumpSingleJson: true,
    noCheckCertificates: true,
    noWarnings: true,
    preferFreeFormats: true,
  });
  
  const formats = info.formats || [];
  
  for (const f of formats) {
    if (f.height >= 1080 || f.vcodec === 'none') {
      console.log(`Format ID: ${f.format_id}, Ext: ${f.ext}, Res: ${f.height}p, VCodec: ${f.vcodec}, ACodec: ${f.acodec}, FileSize: ${f.filesize}, ApproxSize: ${f.filesize_approx}`);
    }
  }
}

test().catch(console.error);

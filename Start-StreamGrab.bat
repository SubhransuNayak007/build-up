@echo off
echo ===================================================
echo               STARTING STREAMGRAB
echo ===================================================
echo.
echo 1. Starting the Backend Server (Port 3001)...
start "StreamGrab Backend" cmd /k "cd backend && node server.js"

echo 2. Starting the Frontend Server (Port 3000)...
start "StreamGrab Frontend" cmd /k "npm run dev"

echo.
echo Both servers are starting up! Please wait a few seconds...
timeout /t 6 /nobreak >nul

echo 3. Opening StreamGrab in your web browser...
start http://localhost:3000

echo.
echo DONE! Keep the two black command windows open while you use the app.
echo You can close this window now.
pause

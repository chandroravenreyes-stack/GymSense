@echo off
echo Starting GymSense Server...
echo.
echo Open your browser and go to: http://localhost:3000/login.html
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 3000
pause

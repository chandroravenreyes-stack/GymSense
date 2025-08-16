@echo off
echo.
echo ========================================
echo    🏋️ Starting GymSense Server
echo ========================================
echo.
echo Server will start on: http://localhost:8080
echo.
echo To access GymSense:
echo 1. Login Page: http://localhost:8080/login.html
echo 2. Main App: http://localhost:8080/index.html
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.
cd /d "%~dp0"
python -m http.server 8080
pause

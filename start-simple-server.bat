@echo off
echo.
echo ========================================
echo    🏋️ Starting GymSense Server
echo ========================================
echo.
echo Trying to start server on port 8080...
echo.

REM Try Python first
python -m http.server 8080 2>nul
if %errorlevel% equ 0 goto :success

REM Try Python3
python3 -m http.server 8080 2>nul
if %errorlevel% equ 0 goto :success

REM Try py launcher
py -m http.server 8080 2>nul
if %errorlevel% equ 0 goto :success

REM Try Node.js
node server.js 2>nul
if %errorlevel% equ 0 goto :success

echo.
echo ❌ ERROR: Neither Python nor Node.js found!
echo.
echo Please install one of the following:
echo.
echo 1. Python 3.x from https://python.org
echo    - Make sure to check "Add Python to PATH" during installation
echo.
echo 2. Node.js from https://nodejs.org
echo.
echo After installation, restart this script.
echo.
echo Alternative: Open the files directly in your browser:
echo - Open login.html in your browser
echo - Some features may not work without a server
echo.
pause
goto :end

:success
echo.
echo ✅ Server started successfully!
echo Open your browser and go to: http://localhost:8080/login.html
echo.

:end

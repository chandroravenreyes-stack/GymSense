# 🔧 GymSense Troubleshooting Guide

## Quick Start Checklist

### ✅ **Server Setup**
1. **Start Server**: Double-click `start-gymsense.bat` OR run `python -m http.server 8080` in terminal
2. **Verify Server**: Check that you see "Serving HTTP on 0.0.0.0 port 8080" message
3. **Access App**: Open http://localhost:8080/login.html in your browser

### ✅ **Browser Requirements**
- **Recommended**: Chrome 80+ or Edge 80+
- **Alternative**: Firefox 75+ or Safari 13+
- **Enable JavaScript**: Make sure JavaScript is enabled in your browser

## Common Issues & Solutions

### 🚫 **"Site can't be reached" Error**
**Problem**: Server isn't running or wrong port
**Solutions**:
1. Check if server is running: `netstat -an | findstr :8080`
2. Kill existing Python processes: `taskkill /f /im python.exe`
3. Restart server: `python -m http.server 8080`
4. Try different port: `python -m http.server 3000` (then use :3000 in URL)

### 🚫 **Blank White Screen**
**Problem**: JavaScript errors or missing files
**Solutions**:
1. **Check Browser Console**: Press F12 → Console tab → Look for red errors
2. **Hard Refresh**: Press Ctrl+F5 or Ctrl+Shift+R
3. **Clear Cache**: Clear browser cache and cookies for localhost
4. **Check Files**: Ensure all JS files exist in the js/ folder

### 🚫 **Login Page Loads but App Doesn't**
**Problem**: Authentication or file loading issues
**Solutions**:
1. **Try Guest Mode**: Click "Continue as Guest" on login page
2. **Check Console**: Look for 404 errors for missing JS files
3. **Verify Files**: Ensure these files exist:
   - js/auth.js
   - js/app.js
   - js/analytics.js
   - js/theme-manager.js
   - js/equipment-database.js
   - js/user-profile.js
   - js/ar-simulator.js
   - js/recommendations.js

### 🚫 **Analytics Not Working**
**Problem**: Analytics system not loading
**Solutions**:
1. **Check Console**: Look for "GymSenseAnalytics" errors
2. **Verify File**: Ensure js/analytics.js exists and loads
3. **Clear Data**: Clear localStorage: F12 → Application → Local Storage → Clear All
4. **Reload**: Hard refresh the page

### 🚫 **Styles Look Broken**
**Problem**: CSS files not loading
**Solutions**:
1. **Check Files**: Ensure these CSS files exist:
   - styles/main.css
   - styles/mobile.css
   - styles/analytics.css
   - styles/auth.css
2. **Hard Refresh**: Press Ctrl+F5
3. **Check Console**: Look for 404 errors for CSS files

## Step-by-Step Debugging

### 1. **Server Check**
```bash
# Check if server is running
netstat -an | findstr :8080

# If not running, start server
python -m http.server 8080

# Verify in browser
http://localhost:8080
```

### 2. **File Structure Check**
Ensure you have this structure:
```
gymsense v.1/
├── login.html ✓
├── index.html ✓
├── start-gymsense.bat ✓
├── js/
│   ├── auth.js ✓
│   ├── app.js ✓
│   ├── analytics.js ✓
│   ├── theme-manager.js ✓
│   ├── equipment-database.js ✓
│   ├── user-profile.js ✓
│   ├── ar-simulator.js ✓
│   └── recommendations.js ✓
├── styles/
│   ├── auth.css ✓
│   ├── main.css ✓
│   ├── mobile.css ✓
│   └── analytics.css ✓
└── assets/images/ ✓
```

### 3. **Browser Console Check**
1. Press **F12** to open Developer Tools
2. Go to **Console** tab
3. Look for any **red error messages**
4. Common errors to look for:
   - `404 (Not Found)` - Missing files
   - `ReferenceError` - JavaScript errors
   - `TypeError` - Object/function not found

### 4. **Network Tab Check**
1. In Developer Tools, go to **Network** tab
2. Refresh the page (F5)
3. Look for any **red entries** (failed requests)
4. Check that all JS and CSS files load successfully

## Manual Testing Steps

### ✅ **Login Flow**
1. Open http://localhost:8080/login.html
2. Should see GymSense login page with army green theme
3. Click "Continue as Guest"
4. Should redirect to main app

### ✅ **Main App**
1. Should see loading screen briefly
2. Then main app with bottom navigation
3. Home screen should show welcome message
4. Stats should show numbers (may be 0 initially)

### ✅ **Navigation**
1. Click each bottom nav button:
   - 🏠 Home
   - 📷 AR Scanner
   - 💪 Workouts
   - 📊 Progress
2. Each screen should load without errors

### ✅ **Analytics Features**
1. Go to Progress tab (📊)
2. Should see progress cards
3. May show demo data if no workouts completed
4. Check for any JavaScript errors in console

## Advanced Troubleshooting

### **Reset Everything**
If nothing works, try this complete reset:

1. **Stop Server**: Close terminal/command prompt
2. **Clear Browser**: Clear all localhost data
   - F12 → Application → Storage → Clear site data
3. **Restart Browser**: Close and reopen browser
4. **Start Fresh Server**: `python -m http.server 8080`
5. **Open Clean**: http://localhost:8080/login.html

### **Alternative Ports**
If port 8080 is busy:
```bash
# Try different ports
python -m http.server 3000  # Use :3000 in URL
python -m http.server 8000  # Use :8000 in URL
python -m http.server 5000  # Use :5000 in URL
```

### **Check Python Installation**
```bash
# Verify Python is installed
python --version

# If not found, try
python3 --version

# Use python3 if python doesn't work
python3 -m http.server 8080
```

## Success Indicators

### ✅ **Working Correctly**
- Login page loads with proper styling
- Can click "Continue as Guest" successfully
- Main app loads with bottom navigation
- All 4 screens (Home, Scanner, Workouts, Progress) accessible
- No red errors in browser console
- Analytics data visible in Progress tab

### ✅ **Analytics Working**
- Progress tab shows insights and achievements
- Stats update when completing actions
- Demo data appears if no real data exists
- Notifications appear for achievements

## Getting Help

### **Console Errors**
If you see errors in the browser console:
1. Take a screenshot of the error
2. Note which file and line number
3. Check if that file exists in the correct location

### **File Missing Errors**
If you get 404 errors:
1. Check the file path in the error
2. Verify the file exists in your project
3. Ensure correct spelling and capitalization

### **Still Not Working?**
1. Try the complete reset steps above
2. Use a different browser (Chrome recommended)
3. Check Windows Firewall isn't blocking Python
4. Try running as Administrator

---

**Remember**: GymSense is a Progressive Web App with advanced analytics. All features should work smoothly once the server is running and files are properly loaded! 🏋️💪

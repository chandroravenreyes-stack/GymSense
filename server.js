const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8080;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  
  // Default to login.html if accessing root
  if (pathname === '/') {
    pathname = '/login.html';
  }
  
  const filePath = path.join(__dirname, pathname);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log('========================================');
  console.log('    🏋️ GymSense Server Started');
  console.log('========================================');
  console.log('');
  console.log(`Server running at: http://localhost:${port}`);
  console.log('');
  console.log('To access GymSense:');
  console.log(`1. Login Page: http://localhost:${port}/login.html`);
  console.log(`2. Main App: http://localhost:${port}/index.html`);
  console.log('');
  console.log('Press Ctrl+C to stop the server');
  console.log('========================================');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Please try a different port.`);
  } else {
    console.log('Server error:', err);
  }
});

const http = require('http');
const fs = require('fs');
const { getFilePath, handleError } = require('./utils');

// Function to handle HTTP requests
const handleRequest = (req, res) => {
    const filePath = getFilePath(req.url);
    const readStream = fs.createReadStream(filePath);

    readStream.on('error', (error) => {
        handleError(res, error);
    });

    readStream.pipe(res);
};

// app.js
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// // Function to handle HTTP requests
// const handleRequest = (req, res) => {
//     const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
//     const readStream = fs.createReadStream(filePath);

//     readStream.on('error', (error) => {
//         if (error.code === 'ENOENT') {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//         } else {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         }
//     });

//     readStream.pipe(res);
// };

// Create the HTTP server
const server = http.createServer(handleRequest);

// Set the server to listen on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

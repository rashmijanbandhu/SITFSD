// utils.js
const path = require('path');
const fs = require('fs');

// Function to get the file path for a given URL
const getFilePath = (url) => {
    return path.join(__dirname, 'public', url === '/' ? 'index.html' : url);
};

// Function to handle errors in the HTTP response
const handleError = (res, error) => {
    if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
};

module.exports = {
    getFilePath,
    handleError,
};

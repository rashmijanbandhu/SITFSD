// app.js
const express = require('express');
const mainController = require('./controllers/mainController');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Static files
// to serve static files from the 'public' 
//directory. This can include stylesheets,
// images, or client-side JavaScript files.
app.use(express.static('public'));

// Routes
app.get('/', mainController.getIndex);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

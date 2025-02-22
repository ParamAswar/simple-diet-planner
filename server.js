const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Serve the index.html file
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'views' directory
//app.use(express.static(path.join(__dirname, '../views')));
// Serve static files from 'assets' directory
//app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Serve the index.html file from the 'views' folder when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



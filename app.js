const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));
app.get('/contact', (req, res) => {
    res.sendFile( path.join(publicDir, 'contact.html' ));
});
app.get('/solutions', (req, res) => {
    res.sendFile( path.join(publicDir, 'solutions.html') );
});
app.listen(port, () => {
    console.log('App running on ' + port);
});

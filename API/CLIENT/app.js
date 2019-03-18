const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/views/new.html');
})

app.listen(8080);
console.log("8080");
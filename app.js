/*-----------IMPORTS-----------*/
const express = require('express');
const app = express();
const api = require('./apiFunctions');
const f = require('./functions');
/*-----------IMPORTS-----------*/

/*-----------MIDDLEWARE-----------*/
app.use(express.json());
app.use(express.static(__dirname));
/*-----------MIDDLEWARE-----------*/

/*-----------INIT-----------*/
f.init
.catch(err => console.log(err));
/*-----------INIT-----------*/
             
/*-----------SITE-----------*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/views/new.html');
});
app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/views/search.html');
});
app.get('/id/:id', (req, res) => {
    res.sendFile(__dirname + '/views/profile.html');
});
/*-----------SITE-----------*/

/*-----------API-----------*/
app.post('/api/new', api.new);
app.post('/api/search/name/', api.search.name);
app.get('/api/id/:id', api.id);
app.get('/api/platform/:platform', api.platform);
app.get('/api/save', api.save);
/*-----------API-----------*/

/*-----------LISTENER-----------*/
app.listen(555);
console.log("FLOOR 555");
/*-----------LISTENER-----------*/
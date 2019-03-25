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
app.get('/view', (req, res) => {
    res.sendFile(__dirname + '/views/profile.html');
});
app.get('/404', (req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});
app.get('/id/:id', (req, res) => {
    res.sendFile(__dirname + '/views/profile.html');
});
/*-----------SITE-----------*/

/*-----------API-----------*/
app.post('/api/edit', api.edit);
app.post('/api/new', api.new);
app.post('/api/search/name/', api.search.name);
app.get('/api/id/:id', api.id);
app.get('/api/platform/:platform', api.platform);
app.get('/api/save', api.save);
/*-----------API-----------*/

/*-----------LISTENER-----------*/
app.listen(f.port);
console.log("Listening on " + f.port);
/*-----------LISTENER-----------*/
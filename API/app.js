const express = require('express');
const app = express();
const api = require('./apiFunctions');

app.use(express.json());


/*-----------API-----------*/
app.post('/api/new', api.new);
app.get('/api/id/:id', api.id);
app.get('/api/platform/:platform', api.platform);
/*-----------API-----------*/
app.listen(555);
console.log("FLOOR 555");
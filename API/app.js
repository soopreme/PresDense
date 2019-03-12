/*-----------IMPORTS-----------*/
const express = require('express');
const app = express();
const api = require('./apiFunctions');
const f = require('./functions');
/*-----------IMPORTS-----------*/

/*-----------MIDDLEWARE-----------*/
app.use(express.json());
/*-----------MIDDLEWARE-----------*/

/*-----------INIT-----------*/
f.init
.catch(err => console.log(err));
/*-----------INIT-----------*/

/*-----------API-----------*/
app.post('/api/new', api.new);
app.get('/api/id/:id', api.id);
app.get('/api/platform/:platform', api.platform);
app.get('/api/save', api.save);
/*-----------API-----------*/

/*-----------LISTENER-----------*/
app.listen(555);
console.log("FLOOR 555");
/*-----------LISTENER-----------*/
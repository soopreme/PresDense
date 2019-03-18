/*-----------IMPORTS-----------*/
const express = require('express');
const app = express();
const api = require('./apiFunctions');
const f = require('./functions');
/*-----------IMPORTS-----------*/

var findRelated = q => new Promise((resolve, reject) => {
    var foundArray = [];
    for(i=0; i<f.profileArray.length; i++) {
        for(plat in f.profileArray[i]){
            var prof = f.profileArray[i];
            foundArray.push({profileName: prof[name], foundPlatform: plat, foundName: prof[plat]});
        }
    }
    console.log(foundArray);
    resolve(foundArray);
})

var searchByName = (req, res) => {
    var query = req.body.name
    findRelated(query)
    .then(json => res.json({json}))
    .catch(err => res.status(500).json({err}));
}


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
    res.sendFile(__dirname + '/CLIENT/views/index.html');
})

app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/CLIENT/views/new.html');
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + "/CLIENT/views/search.html");
});
/*-----------SITE-----------*/

/*-----------API-----------*/
app.post('/api/new', api.new);
app.get('/api/id/:id', api.id);
app.get('/api/platform/:platform', api.platform);
app.get('/api/save', api.save);
app.post('/api/search/name/', searchByName);
/*-----------API-----------*/

/*-----------LISTENER-----------*/
app.listen(555);
console.log("FLOOR 555");
/*-----------LISTENER-----------*/
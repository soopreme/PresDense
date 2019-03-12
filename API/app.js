const express = require('express');
const app = express();
const f = require('./functions');
app.use(express.json());

/*-----------API-----------*/
app.post('/api/new', (req, res) => {
    f.validateNewProfile(req.body)
    .then(f.addProfile)
    .then(id => res.json({id}))
    .catch(err => res.send(err));
});

app.get('/api/id/:id', (req, res) => {
    var id = req.params.id;
    f.profileArray[id] ? res.json(f.profileArray[id]) : res.sendStatus(404);
});
app.get('/api/platform/:platform', (req, res) => {
    var platform = req.params.platform;
    f.getByPlatform(platform)
    .then(f.isArrayPopulated)
    .then(array => res.json(array))
    .catch(statusCode => res.sendStatus(statusCode));
})
/*-----------API-----------*/
app.listen(555);
console.log("FLOOR 555");
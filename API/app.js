const express = require('express');
const app = express();
const f = require('./functions');
app.use(express.json());

/*-----------API-----------*/
app.post('/api/new', (req, res) => {
    var body = req.body;

    f.validateNewProfile(body)
    .then(f.addProfile)
    .then(id => res.json({id}))
    .catch(err => res.send(err));
});

app.get('/api/:id', (req, res) => {
    var id = req.params.id;
    f.profileArray[id] ? res.json(f.profileArray[id]) : res.sendStatus(404);
})
/*-----------API-----------*/
app.listen(555);
console.log("FLOOR 555");
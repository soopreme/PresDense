const express = require('express');
const app = express();
const data = require('./fakedata');

app.get('/:profilename', (req, res) => {
    if(!req.params.profilename){
        return res.status(400);
    }
    if(!fakedata[req.params.profilename]){
        return res.status(404)
    }
    return res.send(fakedata[req.params.profilename]);
});
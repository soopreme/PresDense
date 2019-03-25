const f = require('../functions');
module.exports = function(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    f.validateNewProfile(req.body)
    .then(f.addProfile)
    .then(id => res.send({id}))
    .catch(err => res.send(err));
}
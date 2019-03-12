const f = require('../functions');
module.exports = function(req, res) {
    f.validateNewProfile(req.body)
    .then(f.addProfile)
    .then(id => res.json({id}))
    .catch(err => res.send(err));
}
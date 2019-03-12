const f = require('../functions');
module.exports = function(req, res) {
    var id = req.params.id;
    f.profileArray[id] ? res.json(f.profileArray[id]) : res.sendStatus(404);
}
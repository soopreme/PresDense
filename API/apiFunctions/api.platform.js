const f = require('../functions');
module.exports = function(req, res) {
    var platform = req.params.platform;
    f.getByPlatform(platform)
    .then(f.isArrayPopulated)
    .then(array => res.json(array))
    .catch(statusCode => res.sendStatus(statusCode));
}
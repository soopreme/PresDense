const f = require('../functions');
module.exports = function(req, res) {
    f.saveNewData(__dirname + '/../profiles.json', {profileArray: f.profileArray, profileID: f.profileID})
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500));
}
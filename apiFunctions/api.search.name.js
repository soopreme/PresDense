var f = require('../functions');
module.exports = (req, res) => {
    var query = req.body.name
    f.findRelated(query)
    .then(json => res.json({json}))
    .catch(err => res.status(500).json({err}));
}
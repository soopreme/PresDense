var f = require('../functions');
module.exports = (req, res) => {
    var query = req.body.name
    f.findRelated(query)
    .then(json => {
        if(json.length === 0) {
            return res.sendStatus(404);
        }
        res.json({json})
    })
    .catch(err => {
        res.status(500).json({err})
        console.log(err);
    });
}
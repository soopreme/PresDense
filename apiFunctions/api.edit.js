const f = require('../functions');
module.exports = (req, res) => {
    var auth = req.headers.authorization;
    var body = req.body;
    if(!req.headers.authorization) {
        return res.status(401).json({msg: "No auth header"});
    }
    if(!body.id.toString()) {
        return res.status(400).json({msg: "No name specified"});
    }
    if(f.checkAuthorization(auth)){
        f.modifyProfile(body)
        .then(foundBool => {
            if(foundBool){
                return res.sendStatus(200);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch(err => res.status(500).json({err}));
    }
    
}

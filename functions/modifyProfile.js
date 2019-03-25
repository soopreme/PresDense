const f = require('./index');
module.exports = body => new Promise((resolve, reject) => {
    for(i=0; i<f.profileArray.length; i++) {
        if(body.name === f.profileArray[i].name) {
            Object.assign(f.profileArray[i], body);
            return resolve(true)
        }
    }
    resolve(false);
});
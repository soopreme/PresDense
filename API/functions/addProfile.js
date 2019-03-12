const ext = require('./index');
module.exports = body => new Promise((resolve, reject) => {
    try {
        body.profileID = ext.profileID++;
        ext.profileArray.push(body);
        resolve(body.profileID);
        console.log(ext);
    } catch (err) {
        reject(err);
    }
});
const ext = require('./index');
module.exports = body => new Promise((resolve, reject) => {
    try {
        body.profileID = ext.profileID++;
        ext.profileArray.push(body);
        resolve(body.profileID);
    } catch (err) {
        reject(err);
    }
});
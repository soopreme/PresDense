const ext = require('./index')
module.exports = file => new Promise((resolve, reject) => {
    try {
        ext.profileArray = require(file).profileArray;
        ext.profileID = require(file).profileID;
        resolve();
    } catch (err) {
        reject(err);
    }
})
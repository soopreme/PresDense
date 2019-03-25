const ext = require('./index')
module.exports = file => new Promise((resolve, reject) => {
    try {
        ext.profileArray = require(file);
        resolve();
    } catch (err) {
        reject(err);
    }
})
const ext = require('./index');
module.exports = new Promise((resolve, reject) => {
    ext.loadProfiles('../profiles.json')
    .catch(reject);
})
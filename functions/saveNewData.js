const fs = require('fs');

module.exports = (path, object) => new Promise((resolve, reject) => {
    try{
        var ws = fs.createWriteStream(path);
        ws.write(JSON.stringify(object));
        ws.close()
        resolve();
    } catch (err) {
        reject(err);
    }
})
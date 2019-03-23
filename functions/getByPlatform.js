const f = require('./index');
module.exports = platform => new Promise((resolve, reject) => {
    try {
        var platformNameArray = [];
        for(i=0;i<f.profileArray.length;i++) {
            f.profileArray[i][platform] 
            ? platformNameArray.push(f.profileArray[i][platform]) 
            : null; 
        }
        resolve(platformNameArray);
    } catch (err) {
        reject(500);
    }
})
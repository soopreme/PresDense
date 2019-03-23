var f = require('./index');
module.exports = query => new Promise((resolve, reject) => {
    var foundArray = [];
    for(i=0; i<f.profileArray.length; i++) {
        for(plat in f.profileArray[i]){
            var prof = f.profileArray[i];
            if((prof[plat].toString()).includes(query)) {
                foundArray.push({profileName: prof['name'], foundPlatform: plat, foundName: prof[plat], foundProfileID: prof['profileID']});
            }
        }
    }
    resolve(foundArray);
});
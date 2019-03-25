const f = require('./index');
module.exports = auth => {
    return (auth === f.adminPass) ? true : false
}
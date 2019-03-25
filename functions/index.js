exports.adminPass = "sociopath";
exports.profileArray = [];
exports.profileID = 0;
exports.port = 3010;

exports.modifyProfile = require('./modifyProfile');
exports.checkAuthorization = require('./checkAuthorization');
exports.addProfile = require('./addProfile');
exports.validateNewProfile = require('./validateNewProfile');
exports.isArrayPopulated = require('./isArrayPopulated');
exports.getByPlatform = require('./getByPlatform');
exports.saveNewData = require('./saveNewData');
exports.loadProfiles = require('./loadProfiles');
exports.init = require('./init');
exports.findRelated = require('./findRelated');

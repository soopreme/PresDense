module.exports = array => new Promise((resolve, reject) => {
    return (array.length >= 1) 
    ? resolve(array) 
    : reject(404);
});
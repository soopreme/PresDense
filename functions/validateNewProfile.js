module.exports = body => new Promise((resolve, reject) => {
    console.log(body);
    (!body.name) ? reject("body.name") : resolve(body)
});
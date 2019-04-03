var fs = require('fs');
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var express = require('express');
var bcrypt = require('bcrypt');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "presdense"
});

var app = express();
var saltRounds = 10;
var secretLength = 5;
var privateKey = fs.readFileSync('./keys/private.key', 'utf8');
var publicKey = fs.readFileSync('./keys/public.key', 'utf8');

var jwtOptions = {
    algorithm: "RS256"
}

var connect = new Promise((resolve, reject) => {
    connection.connect(err => {
        if(err) reject(err);
        else resolve();
    });
});

var query = query => new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
        if(err) reject(err);
        else resolve(result);
    })
})

var hashString = string => new Promise((resolve, reject) => {
    bcrypt.hash(string, saltRounds, (err, hash) => {
        if(err) reject(err);
        else resolve(hash);
    })
});


var generateRandomString = length => new Promise((resolve, reject) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    resolve(text);
})

var generateToken = (secret, admin) => new Promise((resolve, reject) => {
    var token = jwt.sign({secret, admin}, privateKey, signOptions);
    resolve(token);
})

var verifyToken = token => new Promise((resolve, reject) => {
    var isReal = jwt.verify(token, publicKey, jwtOptions);
    resolve(isReal);
})

var newUser = (username, password, admin) => new Promise((resolve, reject) => {
    var secret;
    var token;
    connect
    .then(() => {
        return generateRandomString(secretLength);
    })
    .then(genSecret => {
        secret = genSecret;
        return generateToken(secret, admin);
    })
    .then(genToken => {
        token = genToken;
        return;
    })
    .then(() => {
        return hashString(password)
    })
    .then(hash => {
        return query((`INSERT INTO Users (username, password, admin, secret, token) VALUES ('${username}', '${hash}', '${admin}', '${secret}', '${token}');`));
    })
    .then(res => {
        resolve(token);
    })
    .catch(err => {
        reject(err);
    })
})

adminAuthenticate = (req, res, next) => {
    var token = (req.headers("Authorization")).split(" ")[1]
    if(!token){
        return res.sendStatus(401);
    }
    verifyToken(token)
    .then(payload => {
        if(payload.admin != 1) {
            return res.sendStatus(403);
        }
        return next();
    })
    .catch(err => {
        return res.sendStatus(401);
    });
}

app.use(express.json());

app.post('/api/new/admin', adminAuthenticate, (req, res) => {
    var {username, password} = req.body
    if(!username || !password) {
        return res.sendStatus(400);
    }
    newUser(username, password, 1)
    .then(token => {
        res.json({token});
    })
    .catch(err => {
        res.status(500).json({err});
    });
});

app.post('/api/new/user', (req, res) => {
    var {username, password} = req.body;
    if(!username || !password) {
        return res.sendStatus(400);
    }
    newUser(username, password, 0)
    .then(token => {
        res.json({token});
    })
    .catch(err => {
        res.status(500).json({err});
    });
});

app.post('login', (req, res) => {
    var {username, password} = req.body;
    if(!username || !password) {
        return res.sendStatus(400);
    }
    
})
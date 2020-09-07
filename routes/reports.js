var express = require('express');
var router = express.Router();

//JSON Web Tokens
const jwt = require('jsonwebtoken');

router.post("/",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => {
            console.log("lol");
        }
    );

function checkToken(req, res, next) {
    const token = req.headers['token'];
    const secret = "lol";

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            // send error response
            console.log("NO")
        }
        console.log("YES")
        // Valid token send on the request
        next();
    });
}

module.exports = router;

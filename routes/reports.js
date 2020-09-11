var express = require('express');
var router = express.Router();

//JSON Web Tokens
const jwt = require('jsonwebtoken');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite')

router.get("/", (req, res) => {
    db.all("SELECT week FROM weeks",
    (err, theWeeks) => {
        console.log("Sent week information.");
        console.log(theWeeks);
        res.json(theWeeks);
    })
});

router.post("/",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => {
        var week = req.body.week;
        var content = req.body.content;
        console.log("lol...");

        db.run("INSERT INTO weeks (week, content) VALUES (?, ?)",
        week,
        content,
        (err) => {
            res.send(err);
        })
            res.status(201);
        }
    );

function checkToken(req, res, next) {
    const token = req.cookies.token;
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            // send error response
            res.send(err);
        } else {
            // Valid token send on the request
            console.log("Good job.");
            next();
        }
    });
}

module.exports = router;

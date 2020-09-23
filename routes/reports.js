var express = require('express');
var router = express.Router();

//JSON Web Tokens
const jwt = require('jsonwebtoken');

// Database
const db = require("../db/database.js");

router.post("/update",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => {
        var week = req.body.week;
        var content = req.body.content;

        db.run("UPDATE weeks SET content = ? WHERE week = ?",
        content,
        week,
    (err) => {
        if (err) {
            res.status(401).json({
                data: {
                    status: 400,
                    error: 'Error'
                }
            });
        } else {
            res.status(200).json({
                data: {
                    status: 200,
                    msg: 'Report updated'
                }
            });
        }
    })
});

router.get("/", (req, res) => {
    db.all("SELECT week FROM weeks",
    (err, theWeeks) => {
        res.json(theWeeks);
    })
});

router.post("/",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => {
        var week = req.body.week;
        var content = req.body.content;

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

    jwt.verify(token, secret, function(err) {
        if (err) {
            // send error response
            res.json({
                data: {
                    type: "token-error",
                    error: "Invalid token",
                }
            });
        } else {
            // Valid token send on the request
            next();
        }
    });
}

module.exports = router;

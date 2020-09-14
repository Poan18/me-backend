var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

router.post("/:id/update",
    (req, res, next) => checkToken(req, res, next),
    (req, res) => {
        var week = req.params.id;
        var content = req.body.content;
        db.run("UPDATE weeks SET content = ? WHERE week = ?",
        week,
        content,
    (err) => {
        if (err) {
            res.status(400).json({
                 errors: {
                     status: 400,
                     msg: "Error updating information.",
                     detail: err.message
                 }
             });
        } else {
            res.status(201).json({
                 data: {
                     status: 200,
                     msg: "Week was successfully updated."
                 }
             });
        };
    })
});

router.get("/:id", (req, res) => {
    db.get("SELECT * FROM weeks WHERE week = ?",
    req.params.id,
    (err, theWeek) => {
        res.json(theWeek.content);
    })
});

function checkToken(req, res, next) {
    const token = req.cookies.token;
    const secret = process.env.JWT_SECRET;

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            // send error response
            res.send(err);
        } else {
            // Valid token send on the request
            next();
        }
    });
}

module.exports = router;

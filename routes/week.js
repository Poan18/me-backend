var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

router.post("/:id/update", (req, res) => {
    db.run("UPDATE weeks SET content = ? WHERE week = ?",
    req.params.id,
    (err, theWeek) => {
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
        console.log("Sent week information.");
        res.json(theWeek.content);
    })
});

module.exports = router;

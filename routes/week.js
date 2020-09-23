var express = require('express');
var router = express.Router();

const db = require("../db/database.js");

router.get("/:id", (req, res) => {
    db.get("SELECT * FROM weeks WHERE week = ?",
    req.params.id,
    (err, theWeek) => {
        res.json(theWeek.content);
    })
});

module.exports = router;

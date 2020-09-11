var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite')

router.post("/", (req, res) => {
    db.all("SELECT * FROM weeks",
    (err, theWeek) => {
        console.log("Sent week information.");
        res.json(theWeek);
    })
});


module.exports = router;

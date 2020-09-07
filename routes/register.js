var express = require('express');
var router = express.Router();

// Database purposes
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

// For hashing purposes
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Basic route
router.post("/", (req, res) => {
    var pass = req.body.password;
    var email = req.body.email;

    bcrypt.hash(pass, saltRounds, function(err, hash) {
        db.run("INSERT INTO users (email, password) VALUES (?, ?)",
            email,
            hash, (err) => {
            if (err) {
                res.status(400).json({
                     data: {
                         msg: "ERROR!"
                     }
                 });
            } else {
                res.status(201).json({
                     data: {
                         msg: "Got a POST request, sending back 201 Created"
                     }
                 });
            }
        });
    });
});

module.exports = router;

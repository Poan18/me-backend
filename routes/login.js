var express = require('express');
var router = express.Router();

// Database purposes
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

// For hashing purposes
const bcrypt = require('bcryptjs');

//JSON Web Tokens
const jwt = require('jsonwebtoken');

// Basic route
router.post("/", (req, res) => {
    var pass = req.body.password;
    var email = req.body.email;

    db.get("SELECT password FROM users WHERE email=?",
        email,
        (err, row) => {
            if (!row) {
                res.status(404).json({
                     data: {
                         msg: false
                     }
                 });
            } else {
                bcrypt.compare(req.body.password, row.password, function(err, bres) {
                    // res is true if correct password, otherwise false.
                    if (bres) {
                        const payload = { email: email };
                        const secret = process.env.JWT_SECRET;

                        const token = jwt.sign(payload, secret, { expiresIn: '1h'});
                        res.cookie('token', 'tokenValue', {
          maxAge: 60 * 60 * 1000, // 1 hour
  httpOnly: true,
  secure: true,
  sameSite: true,
});
                        console.log(res.cookies);
                        res.json({
                            data: {
                                type: "success",
                                msg: "User logged in",
                                token: token
                            }
                        });
                    } else {
                        res.status(401).json({
                            data: {
                                status: 401,
                                title: "Wrong password",
                                detail: "Password is incorrect"

                            }
                        });
                    }
                });
            }
    });
});

module.exports = router;

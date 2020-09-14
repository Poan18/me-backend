const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Routes
const index = require('./routes/index');
const register = require('./routes/register');
const login = require('./routes/login');
const reports = require('./routes/reports');
const week = require('./routes/week');

//JSON Web Tokens
const jwt = require('jsonwebtoken');

const app = express();
const port = 1337;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use('/', index);
app.use('/register', register);
app.use('/login', login);
app.use('/reports/week', week);
app.use('/reports', reports);

// Start up server
app.listen(port, () => console.log('Example API listening on port ${port}!'));

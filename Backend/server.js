require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(morgan("tiny"));

const connectDB = require('./DB/Connection');

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

    next();
});

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.get('/test', (req, res) => {
    res.json("Api working Prefectly fine.....")
})

const port = process.env.USER_PORT
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
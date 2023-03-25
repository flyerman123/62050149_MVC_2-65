const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cors());

// define route
const route = require('./routes/route');

// define directory
app.use(express.static(path.join(__dirname, 'public')));

// use route
app.use(route);

const port = 3001;

// expose server on port 3001
app.listen(port);

console.log(`server is started on port ${port}`)
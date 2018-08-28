const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


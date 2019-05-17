'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

require('./api/models/message');

mongoose.connect('mongodb://localhost/simple-rest-api', { useNewUrlParser: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error!'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./api/routes/messages')(app);

app.listen(port);

console.log('REST API server started on: ' + port);
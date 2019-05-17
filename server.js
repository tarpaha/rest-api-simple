'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('./libs/logger');

var port = process.env.PORT || 3000;

require('./api/models/message');

mongoose.connect('mongodb://localhost/simple-rest-api', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function(err) {
    logger.error('db connection error:', err.message);
});
db.once('open', function() {
    logger.info('connected to db');
});

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./api/routes/messages')(app);

app.listen(port);

logger.info('Server started on: ' + port);
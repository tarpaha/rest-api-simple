'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('./libs/logger');
var config = require('./libs/config');

require('./api/models/message');

mongoose.connect(config.get('mongoose:uri'), { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function(err) {
    logger.error('DB connection error:', err.message);
});
db.once('open', function() {
    logger.info('Connected to DB');
});

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./api/routes/messages')(app);

var port = config.get('port');
app.listen(port, function() {
    logger.info('Server started on: ' + port);
});
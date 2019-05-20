'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./libs/logger');
const config = require('./libs/config');

mongoose.connect(config.get('mongoose:uri'), { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', function(err) {
    logger.error('DB connection error:', err.message);
});
db.once('open', function() {
    logger.info('Connected to DB');
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/messages', require('./api/routes/messages'));

const port = config.get('port');
app.listen(port, function() {
    logger.info('Server started on: ' + port);
});
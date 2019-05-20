'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = Schema({
    text: String,
});

module.exports = mongoose.model('Message', messageSchema);
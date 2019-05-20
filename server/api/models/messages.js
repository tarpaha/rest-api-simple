'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
    text: String,
});

module.exports = mongoose.model('Message', messageSchema);
'use strict';

var logger = require('../../libs/logger');
var messageModel = require('../models/messages');

module.exports.getAll = function(req, res) {
    messageModel.find(function(err, messages) {
        if(err) {
            logger.error('Message.list() error: ' + err.message);
            res.statusCode = 500;
            return res.send({
                status: 'error',
                error: 'Server error'
            });
        }
        res.send({ status: 'success', messages });
    });
}

module.exports.create = function(req, res) {
    var message = new messageModel({
        text: req.body.text
    });
    message.save(function(err) {
        if(err) {
            logger.error('Message.add() error: ' + err);
            res.statusCode = 500;
            return res.send({
                status: 'error',
                error: 'Server error'
            });
        }
        logger.info('Message added');
        return res.send({ status: 'OK', message: message });
    });
}
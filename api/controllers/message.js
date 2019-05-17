'use strict';

var logger = require('../../libs/logger');
var Message = require('mongoose').model('Message');

module.exports.list = function(req, res) {
    Message.find(function(err, messages) {
        if(err) {
            logger.error('Message.find() error: ' + err.message);
            res.statusCode = 500;
            return res.send({ error: 'Server error' });
        }
        res.send(messages);
    });
}

module.exports.add = function(req, res) {
    var message = new Message({
        text: req.body.text
    });
    message.save(function(err) {
        if(err) {
            logger.error('Message.add() error: ' + err);
            res.statusCode = 500;
            return res.send({ error: 'Server error' })
        }
        logger.info('Message added');
        return res.send({ status: 'OK', message: message });
    });
}
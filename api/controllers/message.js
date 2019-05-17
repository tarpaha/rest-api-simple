'use strict';

var Message = require('mongoose').model('Message');

module.exports.list = function(req, res) {
    Message.find(function(err, messages) {
        if(!err) {
            return res.send(messages);
        } else {
            res.statusCode = 500;
            return res.send({ error: 'Server error' });
        }
    });
}

module.exports.add = function(req, res) {
    var message = new Message({
        text: req.body.text
    });
    message.save(function(err) {
        if(err) {
            console.log(err);
            res.statusCode = 500;
            return res.send({ error: 'Server error' })
        }
        return res.send({ status: 'OK', message: message });
    });
}
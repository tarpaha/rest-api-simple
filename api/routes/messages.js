'use strict';

module.exports = function(app) {

    var controller = require('../controllers/message');

    app.get('/messages', controller.list);
    app.post('/messages', controller.add)
}
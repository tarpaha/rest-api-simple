'use strict';

const express = require('express');

const app = express();
app.use(express.static('public'));

const port = 4000;
app.listen(port, function() {
    console.log('Client started on: ' + port);
});
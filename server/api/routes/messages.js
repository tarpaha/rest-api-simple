'use strict';

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messages');

router.get('/', messageController.getAll);
router.post('/', messageController.create);

module.exports = router;
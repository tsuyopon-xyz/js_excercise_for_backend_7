const express = require('express');
const router = express.Router();
const controller = require('../controller/comments');

router.route('/').get(controller.getComment);

module.exports = router;

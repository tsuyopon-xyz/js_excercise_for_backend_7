const express = require('express');
const router = express.Router();
const controller = require('../controllers/comments');

router.route('/').get(controller.getComment);

module.exports = router;

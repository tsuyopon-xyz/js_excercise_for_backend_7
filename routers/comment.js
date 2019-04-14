const express = require('express');
const router = express.Router();
const controller = require('../controllers/comment');

router.route('/').get(controller.getComment);

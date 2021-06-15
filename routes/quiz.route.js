const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { getAllQuizzes } = require('../controllers/quiz.controller');

router.route('/').get(getAllQuizzes);

module.exports = router;

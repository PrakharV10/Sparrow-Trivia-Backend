const express = require('express');
const router = express.Router();
const { authVerify } = require('../middleware');
const { getPopulatedScoreboard, postUserScore } = require('../controllers/scoreboard.controller');

router.use(authVerify);

router.route('/').get(getPopulatedScoreboard).post(postUserScore);

module.exports = router;

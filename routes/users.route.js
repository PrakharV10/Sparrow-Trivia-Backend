const express = require('express');
const router = express.Router();
const { authVerify } = require('../middleware');
const {
	getUserById,
	changeUsernameAndEmail,
	changePassword,
} = require('../controllers/user.controller');

router.use(authVerify);

router.route('/').get(getUserById);

module.exports = router;

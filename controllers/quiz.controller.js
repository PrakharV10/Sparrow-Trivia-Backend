const { Quiz } = require('../models/quiz.model');

async function getAllQuizzes(req, res) {
	try {
		const dbResponse = await Quiz.find({});
		res.json({ success: true, data: dbResponse });
	} catch (err) {
		res.json({ success: false, messsage: err.messsage });
	}
}

module.exports = { getAllQuizzes };

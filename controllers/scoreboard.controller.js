const mongoose = require('mongoose');
const { Scoreboard } = require('../models/scoreboard.model');

async function getPopulatedScoreboard(req, res) {
	try {
		const populatedScores = await Scoreboard.find()
			.populate({ path: 'userId' })
			.populate({ path: 'quizId' });

		res.json({ success: true, data: populatedScores });
	} catch (err) {
		res.json({ success: false, message: err.message });
	}
}

async function postUserScore(req, res) {
	const { quizId, score } = req.body;
	const { userId } = req.user;

	try {
		const findParticularQuiz = await Scoreboard.findOne({ userId, quizId });
		if (findParticularQuiz) {
			Scoreboard.findOneAndUpdate(
				{ userId, quizId },
				{ latestScore: score, attempts: findParticularQuiz.attempts + 1 }
			);
		} else {
			const newScoreEntry = new Scoreboard({
				quizId,
				userId,
				latestScore: score,
				attempts: 1,
			});
			await newScoreEntry.save();
		}
		const populatedScores = await Scoreboard.find({ userId }).populate({
			path: 'quizId',
		});
		res.json({ success: true, data: populatedScores });
	} catch (err) {
		res.json({ success: false, data: err.message });
	}
}

module.exports = { getPopulatedScoreboard, postUserScore };

const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoreboardSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	quizId: {
		type: Schema.Types.ObjectId,
		ref: 'Quiz',
	},
	attempts: Number,
	latestScore: Number,
});

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);

module.exports = { Scoreboard };

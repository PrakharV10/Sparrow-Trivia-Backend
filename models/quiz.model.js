const mongoose = require('mongoose');
const { Schema } = mongoose;
const { quizzes } = require('../data/quiz');

const optionsSchema = new Schema({
	option: {
		type: String,
		required: 'Option is required.',
	},
	isRight: {
		type: Boolean,
		required: 'Required to check if an option is correct.',
	},
});

const questionsSchema = new Schema({
	question: {
		type: String,
		required: 'Questions are necessary in a Quiz',
	},
	pts: {
		type: Number,
		required: 'Points to be rewarded',
	},
	negativePts: {
		type: Number,
		required: 'Negative Points for a Question.',
	},
	options: {
		type: [optionsSchema],
	},
});

const quizSchema = new Schema({
	topic: {
		type: String,
		required: 'Topic is Required.',
	},
	image: {
		type: String,
		required: 'Image is necesaary for cover photo.',
	},
	maximum: {
		type: Number,
		required: 'Maximum Score is Required.',
	},
	questions: {
		type: [questionsSchema],
	},
});

const Quiz = mongoose.model('Quiz', quizSchema);

async function addQuizzesToDb() {
	console.log('I run');
	try {
		quizzes.forEach(async (quiz) => {
			const NewQuiz = new Quiz(quiz);
			const savedQuiz = await NewQuiz.save();
			console.log(savedQuiz);
		});
	} catch (err) {
		console.log('Error Uploading Videos :', err);
	}
}

module.exports = { Quiz, addQuizzesToDb };

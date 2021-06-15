const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const { connectDb } = require('./connectMongoDB');
const { addQuizzesToDb, Quiz } = require('./models/quiz.model');

const login = require('./routes/login.route');
const signup = require('./routes/signup.route');
const quiz = require('./routes/quiz.route');
const scoreboard = require('./routes/scoreboard.route');
const users = require('./routes/users.route');

app.use(bodyParser.json());
app.use(cors());

connectDb();
/**
 * Will Run Once To Upload Videos to Database.
 * addQuizzesToDb();
 */

app.use('/login', login);
app.use('/signup', signup);
app.use('/quiz', quiz);
app.use('/scoreboard', scoreboard);
app.use('/user', users);

app.get('/', (req, res) => {
	res.send('Hello Sparrow Trivia!');
});

app.listen(3000, () => {
	console.log('server started');
});

// Packages
const express = require('express');
const path = require('path');
const app = express();

// Middlewares
const cors = require('cors');
const logger = require('morgan');

// Routes
const authRouter = require('./routers/auth.router');
const userRouter = require('./routers/user.router');
const todoRouter = require('./routers/todo.router');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api/v1/status', (req, res) => { res.send('  running  ') });
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1', todoRouter);

module.exports = app;

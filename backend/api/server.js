const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const questionsRouter = require('./questions/questions-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/v1/auth', authRouter);
server.use('/api/v1/questions', questionsRouter);

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;
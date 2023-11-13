const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const questionsRouter = require('./questions/questions-router');

const server = express();

const apiVersion = '/api/v1';

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(`${apiVersion}/auth`, authRouter);
server.use(`${apiVersion}/users`, usersRouter);
server.use(`${apiVersion}/questions`, questionsRouter);

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server;
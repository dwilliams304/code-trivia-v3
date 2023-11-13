const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');

router.post('/register', (req, res, next) => {
    res.status(200).json({message: "Register wired"});
    next();
})

router.post('/login', (req, res, next) => {
    res.status(200).json({message: "Login wired"});
    next();
})


module.exports = router;
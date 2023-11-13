const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/login', (req, res, next) => {
    const {username, password} = req.body;


})


module.exports = router;
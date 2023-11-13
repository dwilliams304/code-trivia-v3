const router = require('express').Router();

router.get('/test', (req, res, next) => {
    res.json('QUESTIONS');
    next();
})


module.exports = router;
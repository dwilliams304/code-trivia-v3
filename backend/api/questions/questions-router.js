const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message: 'Questions wired'});
    next();
})

router.post('/', (req, res, next) => {
    res.status(200).json({message: 'Answer wired'});
    next();
})


module.exports = router;
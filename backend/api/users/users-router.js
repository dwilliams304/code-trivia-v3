const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.status(200).json({message: 'Get users wired'});
    next();
})

router.post('/:id', (req, res, next) => {
    res.status(200).json({message: 'Get user_id wired'});
    next();
})


module.exports = router;
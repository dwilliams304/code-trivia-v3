const router = require('express').Router();
const Questions = require('./questions-model');


router.get('/', (req, res, next) => {
    Questions.GetAllQuestions()
        .then(questions => res.status(200).json(questions))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Questions.GetSpecificQuestion(id)
        .then(questions => res.status(200).json(questions))
        .catch(next)
})

router.post('/', (req, res, next) => {
    res.status(200).json({message: 'Answer wired'});
    next();
})


module.exports = router;
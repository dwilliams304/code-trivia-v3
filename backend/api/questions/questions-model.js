const db = require('../../data/db-config');


async function GetAllQuestions(){
    const questions = await db('questions')
        .select('question_id', 'Question');
    
    const result = [];

    for(const q of questions){
        const question = await GetSpecificQuestion(q.question_id)
        result.push(question);
    }

    return result;
}

async function GetSpecificQuestion(id){
    const question = await db('questions')
        .where('question_id', id)
        .select('question_id', 'Question')
        .first();
    const answers = await db('questions_answers as qa')
        .where('qa.question_id', id)
        .leftJoin('answers as a', 'qa.answer_id', 'a.answer_id')
        .select('a.answer_id', 'a.Answer')

    const result = {
        question_id: question.question_id,
        question: question.Question,
        answers: []
    }

    answers.forEach(answer => {
        result.answers.push(answer);
    })

    return result;
}



module.exports = {
    GetAllQuestions,
    GetSpecificQuestion
}
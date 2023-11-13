const questions_answers = require('../initial-data/initial-questions-answers')


exports.seed = async function (knex) {
    await knex('questions_answers').truncate();

    await knex('questions_answers').insert(questions_answers)
}
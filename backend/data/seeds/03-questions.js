const questions = require('../initial-data/initial-questions')


exports.seed = async function (knex) {
    await knex('questions').truncate();

    await knex('questions').insert(questions)
}
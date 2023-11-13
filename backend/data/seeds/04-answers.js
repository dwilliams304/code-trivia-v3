const answers = require('../initial-data/initial-answers')


exports.seed = async function (knex) {
    await knex('answers').truncate();

    await knex('answers').insert(answers)
}
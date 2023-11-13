const users = require('../initial-data/initial-users')


exports.seed = async function (knex) {
    await knex('users').truncate();

    await knex('users').insert(users)
}
const roles = require('../initial-data/initial-roles')


exports.seed = async function (knex) {
    await knex('roles').truncate();

    await knex('roles').insert(roles)
}
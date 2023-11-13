exports.seed = async function (knex) {
    await knex('roles').truncate();
    await knex('users').truncate();

    await knex('roles').insert([
        { role_name: 'admin' },
        { role_name: 'question_creator' },
        { role_name: 'qa' },
        { role_name: 'player' },
    ])

    await knex('users').insert([
        {
            username: 'admin',
            password: 'password',
            role_id: 1,
        },
        {
            username: 'creator',
            password: '1234',
            role_id: 2
        },
        {
            username: 'player',
            password: 'password',
            role_id: 4
        }
    ])
}
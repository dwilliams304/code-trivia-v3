exports.up = function (knex) {
    return knex.schema
        .createTable('roles', roles => {
            roles.increments('role_id')
            roles.string('role_name', 32).notNullable().unique()
        })
        .createTable('users', users => {
            users.increments('user_id')
            users.string('username', 32).notNullable().unique()
            users.string('password', 128).notNullable()
            users.integer('role_id')
                .unsigned()
                .notNullable()
                .references('role_id')
                .inTable('roles')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
        })
        .createTable('questions', questions => {
            questions.increments('question_id').notNullable().unique()
            questions.string('Question', 128).notNullable()
            questions.integer('correct_answer_id')
                .unsigned()
                .notNullable()
        })
        .createTable('answers', answers => {
            answers.increments('answer_id').notNullable().unique()
            answers.string('Answer', 128).notNullable()
        })
        .createTable('questions_answers', table => {
            table.increments('questions_answers_id')
            table.integer('question_id')
                .unsigned()
                .notNullable()
                .references('question_id')
                .inTable('questions')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT')
            table.integer('answer_id')
                .unsigned()
                .notNullable()
                .references('answer_id')
                .inTable('answers')
                .onUpdate('RESTRICT')
                .onDelete('RESTRICT') 
        })
}

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('questions_answers')
        .dropTableIfExists('answers')
        .dropTableIfExists('questions')
        .dropTableIfExists('users')
        .dropTableIfExists('roles')
}
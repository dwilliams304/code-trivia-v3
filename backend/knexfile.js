const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
        directory: './data/migrations',
    },
    seeds: {
        directory: './data/seeds',
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done)
        },
    },
}

module.exports = {
    development: {
        ...sharedConfig,
        connect: { filename: './data/auth.db3' },
    },
    testing: {
        ...sharedConfig,
        connect: { filename: './data/testing.db3' },
    }
}
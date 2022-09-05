// const pgp = require('pg-promise')();

// module.exports = pgp({
//     user: 'postgres',
//     password: '24282181f',
//     host: 'localhost',
//     port: 5432,
//     database: 'AeroMyst1'
// });

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '24282181f',
    database: 'AeroMyst15',
    define: {
        timestamps: true,
        underscored: true
    }
}
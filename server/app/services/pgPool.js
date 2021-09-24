const {Pool} = require('pg');
const { config } = require('process');
console.log(process.env.DATABASE_URL);
let pgConfig = {
    connectionString: process.env.DATABASE_URL
}
if (process.env.NODE_ENV === 'production') {
    config.ssl = {
        rejectUnauthorized: false
    };
}

const pool = new Pool(pgConfig);

module.exports = pool;
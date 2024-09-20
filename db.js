const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'adm',
    password: 'adm',
    database: 'postgres'
})

module.exports = pool
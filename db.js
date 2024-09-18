const pg = require('pg')
const Pool = pg.Pool
require('dotenv').config()

const pool = new Pool()
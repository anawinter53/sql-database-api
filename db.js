require('dotenv').config();

const {Pool} = require('pg');

//connect to a database
const db = new Pool({
    connectionString: process.env.DB_URL
})

module.exports = db;

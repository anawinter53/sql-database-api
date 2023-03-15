const fs = require('fs');

const sql = fs.readFileSync('setup.sql').toString();

const db = require('./db');

db.query(sql)
    .then(data => console.log("Set up complete"))
    .catch(err => console.log(err))

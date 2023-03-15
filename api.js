const express = require('express');
const db = require('./db');
const cors = require('cors');
const api = express();

api.use(express.json());
api.use(cors());

//simple route
api.get('/', (req, res) => {
    res.send('The wrongs API')
});

api.get('/wrongs', async (req, res) => {
    const data = await db.query("SELECT * FROM wrong")
    res.send(data.rows)
})

api.get('/people/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id])
    res.send(data.rows[0])
})


api.get("/wrongs/details", async (req, res) => {
    const data = await db.query(`SELECT p1.person_name AS perp,
    p2.person_name AS victim,
    w.description
    FROM wrong AS w
    JOIN person p1 ON w.perpetrator_id = p1.person_id
    JOIN person p2 ON w.victim_id = p2.person_id;`)
    res.send(data.rows)
})

module.exports = api;



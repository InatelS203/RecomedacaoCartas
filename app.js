const express = require('express');
const app = express();
const pool = require('./db')
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rota para inicializar o banco de dados
app.get('/initialize-db', async (req, res) => {
    try {
        await pool.query('create database cardgame');
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

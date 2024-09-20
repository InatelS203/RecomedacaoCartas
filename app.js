const express = require('express');
const cors = require('cors');
const db = require('./db')
const routes = require('./src/routes')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

db.sequelize.authenticate().then(() => console.log("Authenticated")).catch(err => console.error(err))

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

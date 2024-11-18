const express = require("express");
const cors = require("cors");
const db = require("./src/models/db");
const routes = require("./src/routes");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configurar o template engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use(cors());
app.use(express.json());

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

db.sequelize
  .authenticate()
  .then(() => console.log("Authenticated"))
  .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

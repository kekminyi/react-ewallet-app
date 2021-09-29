const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Base route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to minyi's react application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// Sequelize is a powerful library in Javascript that makes it easy to manage a SQL database.
// Sequelize can layer over different protocols, but here we'll use MySQL.
// At its core, Sequelize is an Object-Relational Mapper –
// meaning that it maps an object syntax onto our database schemas.
// Sequelize uses Node.JS and Javascript's object syntax to accomplish its mapping.

const db = require("./app/models");
// Role table
const Role = db.role;

// force: true causes the db to drop existing tables and re-sync database
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync DB");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
}

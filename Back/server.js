const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

require("./app/routes/record.routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application" });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
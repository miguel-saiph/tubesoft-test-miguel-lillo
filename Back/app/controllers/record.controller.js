const db = require("../models");
const Record = db.records;
const Op = db.Sequelize.Op;

// Create and Save a new record
exports.create = (req, res) => {
  // Validate request
  if (!req.body.time) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a record
  const record = {
    time: req.body.time,
  };

  // Save Record in the database
  Record.create(record)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Record."
      });
    });
};

// Retrieve all records from the database.
exports.findAll = (req, res) => {

  Record.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving records."
      });
    });
};

// Find a single record with an id
exports.findOne = (req, res) => {
  
};

// Update a record by the id in the request
exports.update = (req, res) => {
  
};

// Delete a record with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all records from the database.
exports.deleteAll = (req, res) => {
  
};
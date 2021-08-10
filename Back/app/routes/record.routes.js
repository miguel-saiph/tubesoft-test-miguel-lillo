module.exports = app => {
  const records = require("../controllers/record.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", records.create);

  // Retrieve all Tutorials
  router.get("/", records.findAll);

  app.use('/api/records', router);
};
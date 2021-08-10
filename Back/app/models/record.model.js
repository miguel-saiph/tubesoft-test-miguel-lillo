module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("record", {
    time: {
      type: Sequelize.STRING
    }
  });

  return Record;
};
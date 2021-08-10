module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgre",
  DB: "tubesoft-db",
  dialect: "postgres",
  pool: {
    max: 3,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
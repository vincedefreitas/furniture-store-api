const mysql = require("promise-mysql");
const { host, user, password, database } = require("../../environment.js");

const getDatabase = async () => {
  const connection = await mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });
  return connection;
};

module.exports = { getDatabase };

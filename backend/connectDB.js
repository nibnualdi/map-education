const mysql = require('mysql')
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_edu",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

const getPolygons = (getFunc) => {
  connection.query("SELECT * FROM polygons", getFunc);
};
const getUsers = (getFunc, {username, password}) => {
  connection.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`, getFunc);
};
const createUsers = (getFunc, {username, password}) => {
  connection.query(`INSERT INTO users (username, password) VALUES (${username}, ${password})`, getFunc);
};

module.exports = { getPolygons, getUsers, createUsers };
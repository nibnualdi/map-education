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
const getAllUsers = (getFunc) => {
  connection.query("SELECT * FROM users", getFunc);
};
const createUsers = (createFunc, {username, password}) => {
  connection.query(`INSERT INTO users (username, password) VALUES ('${username}', '${password}')`, createFunc);
};
const addLike = (addFunc, {userId, polygonId}) => {
  connection.query(`INSERT INTO likes (user_id, polygon_id) VALUES ('${userId}', '${polygonId}')`, addFunc)
}
const deleteLike = (deleteFunc, {userId, polygonId}) => {
  connection.query(`DELETE FROM likes WHERE user_id='${userId}' AND polygon_id='${polygonId}'`, deleteFunc)
}
const getLikeByPolygonAndUser = (getFunc, {userId, polygonId}) => {
  connection.query(`SELECT * FROM likes WHERE user_id='${userId}' AND polygon_id='${polygonId}'`, getFunc);
};
const getAllLikes = (getFunc) => {
  connection.query("SELECT * FROM likes", getFunc)
}

module.exports = { getPolygons, getUsers, getAllUsers, createUsers, addLike, deleteLike, getLikeByPolygonAndUser, getAllLikes };
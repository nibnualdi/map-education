const mysql = require('mysql');

// let polygons;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web_edu'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const getPolygons = (getFunc) => {
  connection.query('SELECT * FROM polygons', getFunc);
}


module.exports = { getPolygons };
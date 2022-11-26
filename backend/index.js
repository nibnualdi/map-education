const express = require('express');
const { getPolygons, getUsers, createUsers } = require('./connectDB');

const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get data from database
getPolygons((errPolygons, rowsPolygons) => {
  if (errPolygons) throw errPolygons;

  app.get('/api/polygons', (req, res) => {
    res.send(JSON.stringify(rowsPolygons));
  });
});

app.post('/api/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // get user from database
  getUsers((err, rowsUser) => {
    if (err) throw err;
    res.send(rowsUser);
  }, {username, password});
});

app.post('/api/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // get user from database
  createUsers((err, rowsUser) => {
    if (err) throw err;
    res.send(rowsUser);
  }, {username, password});
});

// run web api
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

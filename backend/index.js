// Collaborative Filtering
const recommend = require('collaborative-filter');

const express = require('express');
const { getPolygons, getUsers, createUsers, addLike, getLikeByPolygonAndUser, deleteLike, getAllLikes, getAllUsers } = require('./connectDB');

 
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

  // create user
  createUsers((err, rowsUser) => {
    if (err) throw err;
    res.send(rowsUser);
  }, {username, password});
});

app.post('/api/polygon/like', (req, res) => {
  const userId = req.body.userId;
  const polygonId = req.body.polygonId;
  
  getLikeByPolygonAndUser((errGet, rowsLike)=>{
    if (errGet) throw errGet;
    if (rowsLike.length) return res.send("udah dilike");
    
    // add like
    addLike((err) => {
      if (err) throw err;
    
      // get like
      res.send(rowsLike);

    }, {userId, polygonId});
      
  }, {userId, polygonId});
});

app.post('/api/polygon/unlike', (req, res) => {
  const userId = req.body.userId;
  const polygonId = req.body.polygonId;
  
  getLikeByPolygonAndUser((errGet, rowsLike)=>{
    if (errGet) throw errGet;
    if (!rowsLike.length) return res.send("belum dilike");
    
    // delete like
    deleteLike((err) => {
      if (err) throw err;
    
      // get like
      res.send(rowsLike);

    }, {userId, polygonId});
      
  }, {userId, polygonId});
});

app.post('/api/polygon/get/like', (req, res)=>{
  const userId = req.body.userId;
  const polygonId = req.body.polygonId;

  getLikeByPolygonAndUser((err, row)=>{
    if (err) throw err;
    res.send(row);
  }, {userId, polygonId});
});

app.post('/api/recomendation', (req, res)=>{
  const userId = req.body.userId;

  getAllLikes((likesErr, likesRow)=>{
    if (likesErr) throw likesErr;
    getPolygons((polygonsErr, polygonsRow)=>{
      if (polygonsErr) throw polygonsErr;
      getAllUsers((usersErr, usersRow)=>{
        if (usersErr) throw usersErr;
  
        let ratings = [];
        usersRow.forEach((elementUser) => {
          let eachRating = [];
          polygonsRow.forEach((elementPolygon) => {
            const idUser = elementUser.id;
            const idPolygon = elementPolygon.id;
            let filterLikes = likesRow.filter((x)=>{ return x.user_id === idUser && x.polygon_id === idPolygon})
            if(filterLikes.length !== 0){
              return eachRating.push(1)
            }
            eachRating.push(0)
          });
          ratings.push(eachRating)
        });
        // const matrix = recommend.coMatrix(ratings, 0);
        const result = recommend.cFilter(ratings, userId-1);
        res.send(result);
        // console.log(result, "result");
        // console.log(matrix._data.length, "matrix");
        // console.log(ratings, "ratings");
  
      });
    });
  });
});

// run web api
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

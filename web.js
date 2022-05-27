const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const myURL = "https://hackathon2022-bvjxrtp5xq-uc.a.run.app";
var gameData;
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  var action;
  var moves;
  
  moves = ['T', 'F'];
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);

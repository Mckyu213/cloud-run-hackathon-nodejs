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
  console.log(req.body);
  gameData = req;
  for(const player in gameData.arena.state){
    if(player == myURL && gameData.arena.state[player].wasHit){
      action = 'F';
    }
    else{
      const moves = ['T', 'L'];
      action = moves[Math.floor(Math.random() * moves.length)];
    }
  }
  res.send(action);
});

app.listen(process.env.PORT || 8080);

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var gameData;
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  
  var action = 'T';
  var moves;
  gameData = req.body;
  console.log(gameData);
  var myURL =  gameData._links.self.href;
  
  for(const player in gameData.arena.state){
    console.log(player);
    if(player == myURL){
      if(gameData.arena.state[player].x!= 0 || gameData.arena.state[player].y!=0){
        moves = ['F','L'];
        action = moves[Math.floor(Math.random() * moves.length)];
        res.send(action);
      }
      else if(gameData.arena.state[player].x == 0 ){
        if(gameData.arena.state[player].direction != 'S' || gameData.arena.state[player].direction !='N'){
          res.send('L');
        }
        else {
          res.send('T');
        }
      }
      else if(gameData.arena.state[player].y == 0 ){
        if(gameData.arena.state[player].direction != 'W' || gameData.arena.state[player].direction !='E'){
          res.send('L');
        }
        else {
          res.send('T');
        }
      }
    }
  }
  
  
  
});

app.listen(process.env.PORT || 8080);

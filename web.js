const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['T', 'L'];
  const action = moves[Math.floor(Math.random() * moves.length)];
  res.send(action);
});

app.listen(process.env.PORT || 8080);

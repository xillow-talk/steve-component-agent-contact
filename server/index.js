const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');
const app = express();
const PORT = 6969;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/houseId/listedAgent', (req, res) => {

  res.send('listed req received');
});

app.get('/houseId/premierAgents', (req, res) => {
  res.send('premier req received');
});

app.listen(PORT, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${PORT}!`);
});

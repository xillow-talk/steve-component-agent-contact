const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../data/db.js');

const app = express();
const PORT = 6969;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.get('/houseId/listedAgent', (req, res) => {
  const houseId = req.body;
  db.getListedAgent(101, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/houseId/premierAgents', (req, res) => {
  db.getPremierAgents((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${PORT}!`);
});

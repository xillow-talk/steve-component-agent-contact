const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 6969;

app.use(express.static(path.resolve(__dirname, '../client/dist')))
app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Hidey-Ho Cap\'n, we are now serving on port ${PORT}!`) })
const express = require('express');
const cors = require('cors');
const findPage = require('./data/findPage.json');
const pageByAlias = require('./data/pageByAlias.json');
const findProduct = require('./data/findProduct.json');

const app = express();

app.use(cors());

app.get('/api/top-page/find', (req, res) => {
  res.json(findPage);
});

app.get('/api/top-page/byAlias/photoshop', (req, res) => {
  res.json(pageByAlias);
});

app.get('/api/product/find', (req, res) => {
  res.json(findProduct);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

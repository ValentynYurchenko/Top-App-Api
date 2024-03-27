const express = require('express');
const cors = require('cors');
const findPage = require('./data/findPage.json');
const pageByAliasPhotoshop = require('./data/pageByAliasPhotoshop.json');
const pageByAliasFinancialAnalitics = require('./data/pageByAliasFinancialAnalytics.json');
const pageByAliasPhography = require('./data/pageByAliasPhotography.json');
const pageByAliasBridge = require('./data/pageByAliasBridge.json');
const pageByAliasInventor = require('./data/pageByAliasInventor.json');
const pageByAliasPython = require('./data/pageByAliasPython.json');
const pageByAliasTrade = require('./data/pageByAliasTrade.json');
const findProduct = require('./data/findProduct.json');

const app = express();

app.use(cors());

app.get('/api/top-page/find', (req, res) => {
  res.json(findPage);
});

app.get('/api/top-page/byAlias/photoshop', (req, res) => {
  res.json(pageByAliasPhotoshop);
});

app.get('/api/top-page/byAlias/financial-analytics', (req, res) => {
  res.json(pageByAliasFinancialAnalitics);
});

app.get('/api/top-page/byAlias/photography', (req, res) => {
  res.json(pageByAliasPhography);
});

app.get('/api/top-page/byAlias/bridge', (req, res) => {
  res.json(pageByAliasBridge);
});

app.get('/api/top-page/byAlias/inventor', (req, res) => {
  res.json(pageByAliasInventor);
});

app.get('/api/top-page/byAlias/python', (req, res) => {
  res.json(pageByAliasPython);
});

app.get('/api/top-page/byAlias/trade', (req, res) => {
  res.json(pageByAliasTrade);
});

app.get('/api/product/find', (req, res) => {
  res.json(findProduct);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

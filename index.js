const express = require("express");
const cors = require("cors");
const findPage = require("./data/findPage.json");
const pageByAliasPhotoshop = require("./data/pageByAliasPhotoshop.json");
const pageByAliasFinancialAnalitics = require("./data/pageByAliasFinancialAnalytics.json");
const findProduct = require("./data/findProduct.json");

const app = express();

app.use(cors());

app.get("/api/top-page/find", (req, res) => {
  res.json(findPage);
});

app.get("/api/top-page/byAlias/photoshop", (req, res) => {
  res.json(pageByAliasPhotoshop);
});

app.get("/api/top-page/byAlias/financial-analytics", (req, res) => {
  res.json(pageByAliasFinancialAnalitics);
});

app.get("/api/product/find", (req, res) => {
  res.json(findProduct);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

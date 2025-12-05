console.log("Express Tutorial");
const express = require("express");
const { products } = require("./data");
const app = express();
app.use(express.static("./public"));
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    res.status(404).json({ message: "That product was not found" });
  }
  res.json(product);
});
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const search = req.query.search;
  const limit = req.query.limit;
  const price = req.query.price;
  let filteredList = [...products];
  if (search) {
    filteredList = filteredList.filter((p) => p.name.startsWith(search));
  }
  if (limit) {
    filteredList = filteredList.slice(0, limit);
  }
  if (price) {
    filteredList = filteredList.filter((p) => p.price <= price);
  }
  res.json(filteredList);
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});
app.listen(3000);

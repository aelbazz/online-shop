// imports
const express = require("express");
const path = require("path");
const app = express();
const homeRouter = require("./routes/home.route");
const productRouter = require("./routes/product.route");
// app
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));
app.set("view engine", "ejs");
app.set("views", "src/views"); // default
app.use("/", homeRouter);
app.use("/product", productRouter);
app.listen("3000", (err) => {
  console.log(err);
  console.log("Server listen on port 3000 http://localhost:3000");
});

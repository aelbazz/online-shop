const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "src/asstes ")));
app.set("view engine", "ejs");
app.set("views", "src/views"); // default
app.get("/", (req, res) => {
  res.render("index");
});
app.listen("3000", (err) => {
  console.log(err);
  console.log("Server listen on port 3000 http://localhost:3000");
});

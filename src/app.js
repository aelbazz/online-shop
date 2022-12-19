// imports
const express = require("express");
const path = require("path");
const app = express();
const homeRouter = require("./routes/home.route");
// app

app.use(express.static(path.join(__dirname, "src/assets")));
app.use(express.static(path.join(__dirname, "src/images")));
app.set("view engine", "ejs");
app.set("views", "src/views"); // default
app.use("/", homeRouter);
app.listen("3000", (err) => {
  console.log(err);
  console.log("Server listen on port 3000 http://localhost:3000");
});

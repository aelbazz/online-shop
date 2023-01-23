// imports
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const SessionStore = require("connect-mongodb-session")(session);
// Constants
const STORE = new SessionStore({
  uri: "mongodb://localhost:27017/online-shope",
  collection: "sessions",
});
// Routers
const homeRouter = require("./routes/home.route");
const productRouter = require("./routes/product.route");
const authRouter = require("./routes/auth.route");
// app
app.use(
  session({
    secret: "This secret is random data depend on object",
    saveUninitialized: false,
    resave: true,
    store: STORE,
  })
);
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));
app.set("view engine", "ejs");
app.set("views", "src/views"); // default
app.use("/", homeRouter);
app.use("/", authRouter);
app.use("/product", productRouter);
app.listen("3000", (err) => {
  console.log( "server error",err);
  console.log("Server listen on port 3000 http://localhost:3000");
});

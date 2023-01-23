const router = require("express").Router();
const bodyParser = require("body-parser");
const authController = require("../controllers/auth.controller");
router.get("/signup", (req, res, next) => {
  res.render("signup");
});
router.post(
  "/signup",
  bodyParser.urlencoded({ extended: true }),
  authController.postSignup
);
router.get("/login", (req, res, next) => {
  res.render("login");
});
router.post(
  "/login",
  bodyParser.urlencoded({ extended: true }),
  authController.postLogin
);
router.all(
  "/logout", 
  authController.logout
);
module.exports = router;

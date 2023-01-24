const authModal = require("../models/auth.modal");

exports.postSignup = (req, res, next) => {
  const { username, email, password } = req.body;
  authModal
    .createNewUser(username, email, password)
    .then(() => res.redirect("/login"))
    .catch(() => res.redirect("/signup"));
};

exports.getLogin = (req, res, next) => {
  res.render("login",{
    authError:req.flash( 'authError')[0]
  });
};
exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  authModal
    .login(email, password)
    .then((id) => {
      console.log("id", id);
      req.session.userId = id;
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      req.flash( 'authError', err)
      res.redirect("/login");
    });
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

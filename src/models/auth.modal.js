const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const bcrypt = require("bcrypt");
const DB_URL = "mongodb://localhost:27017/online-shope";
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const User = mongoose.model("user", userSchema);
exports.createNewUser = (username, email, password) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => User.findOne({ email }))
      .then((user) => {
        if (user) {
          mongoose.disconnect();
          reject("This user is exiting");
        } else {
          return bcrypt.hash(password, 10);
        }
      })
      .then((hashedPassword) => {
        let newUser = new User({
          username,
          email,
          password: hashedPassword,
        });
        return newUser.save();
      })
      .then(() => {
        mongoose.disconnect();
        resolve();
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};
exports.login = (email, password) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => User.findOne({ email }))
      .then((user) => {
        if (!user) {
          mongoose.disconnect();
          // throw new Error("Whj")
          reject(new Error('kk') ) ;
        } else {
          bcrypt.compare(password, user.password).then((same) => {
            if (!same) {
              mongoose.disconnect();
              reject("Password is incorrect");
            } else {
              mongoose.disconnect();
              resolve(user._id);
            }
          });
        }
      })
      .catch((err) => {
        mongoose.disconnect();
        reject(err);
      });
  });
};

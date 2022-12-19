const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/online-shope";
const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String,
});

const Product = mongoose.model("product", productSchema);
exports.getAllProducts = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => Product.find({}))
      .then((products) => {
        mongoose.disconnect();
        resolve(products);
      })
      .catch((err) => reject(err));
  });
};
exports.getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(DB_URL)
      .then(() => Product.find({category}))
      .then((products) => {
        mongoose.disconnect();
        resolve(products);
      })
      .catch((err) => reject(err));
  });
};

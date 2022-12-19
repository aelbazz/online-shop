const productModel = require("../models/product.model");
exports.getHome = (req, res, next) => {
  let category = req.query.category;
  let productsPromise;
  if (category && category !== "all") {
    productsPromise = productModel.getProductsByCategory(category);
  } else {
    productsPromise = productModel.getAllProducts();
  }

  productsPromise.then((products) => {
    res.render("index", {
      products: products,
    });
  });
};

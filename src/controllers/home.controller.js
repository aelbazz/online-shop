const productModel = require("../models/product.model");
exports.getHome = (req, res, next) => {
  let category = req.query.category;
  const validCategory = ["clothes", "phones", "computers"]; // + all 
  let productsPromise;
  if (category && validCategory.includes(category)) {
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

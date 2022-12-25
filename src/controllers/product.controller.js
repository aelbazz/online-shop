const productModel = require("../models/product.model");
exports.getProduct = (req, res, next) => {
  const id = req.params.id;

  productModel.getProductsById(id).then((product) => {
    res.render("product", {
      product: product,
    });
  });
};

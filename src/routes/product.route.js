const router = require("express").Router();
const productController = require("../controllers/product.controller");
router.get("/:id", productController.getProduct);

console.log("test from product ");

module.exports = router;

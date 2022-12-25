const router = require("express").Router();
const productController = require("../controllers/product.controller");
router.get("/", (req, res, next) => {
    res.redirect('/products')
});
router.get("/:id", productController.getProduct);
module.exports = router;

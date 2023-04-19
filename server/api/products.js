const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

// GET /api/products/
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();;

    res.send(products);
  } catch (error) {
    next(error);
  }
})

// GET /api/products/productId/
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.productId,
      }

    });

    res.send(product);
  } catch (error) {
    next(error);
  }
});


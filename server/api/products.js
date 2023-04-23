const router = require('express').Router()
const { models: { Product }} = require('../db')

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

// POST /api/products/ (ADMIN)
router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});


// PUT /api/products/productid (ADMIN)
router.put('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(await product.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/productId
router.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    await product.destroy();
    res.send(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router

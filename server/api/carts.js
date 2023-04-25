const router = require('express').Router()
const { models: { Cart }} = require('../db')


// // GET /api/carts/
// router.get("/", async (req, res, next) => {
//   try {
//     const carts = await Cart.findAll();;

//     res.send(carts);
//   } catch (error) {
//     next(error);
//   }
// })

// GET /api/carts/cartId/
router.get("/:cartId", async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: {
        id: req.params.cartId,
      }

    });

    res.send(cart);
  } catch (error) {
    next(error);
  }
});

// POST /api/carts
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Cart.create(req.body));
  } catch (error) {
    console.log(error)
    next(error)
  }
});

// PUT /api/carts/cartId
router.put('/:cartId', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.cartId);
    res.send(await cart.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router

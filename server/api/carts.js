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

module.exports = router

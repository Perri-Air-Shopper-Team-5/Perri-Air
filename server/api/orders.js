const router = require('express').Router()
const { models: { Order }} = require('../db')


// GET /api/orders/
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();;

    res.send(orders);
  } catch (error) {
    next(error);
  }
})

// GET /api/orders/orderId/
router.get("/:orderId", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.orderId,
      }

    });

    res.send(order);
  } catch (error) {
    next(error);
  }
});

// PUT /api/orders/orderId
router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    res.send(await order.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router

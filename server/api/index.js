const router = require('express').Router()
const { models: { User }} = require('../db')


router.use(async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    if (user === null) {
      return "not logged in";
    }
    req.user = user;
   } catch (err) {
  }
  next()
})

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', require('./orders'))
router.use('/carts', require('./carts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router

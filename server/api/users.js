const router = require('express').Router()
const { models: { User }} = require('../db')

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})


// GET /api/users/userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.userId,
      },
      include: { all: true }
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
});


// POST /api/users/
router.post("/", async (req, res, next) => {
  try {
    const emailExists = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    const usernameExists = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (emailExists !== null) {
      res.status(409).send("Email already exists");
      return;
    } else if (usernameExists !== null) {
      res.status(409).send("Username already exists");
      return;
    } else {
      res.status(201).send(await User.create(req.body));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router


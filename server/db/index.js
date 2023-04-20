//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Order = require("./models/Order");
const Product = require("./models/Product");
const Cart = require("./models/Cart");

//associations could go here!
User.hasMany(Order, {
  as: "orders",
  foreignKey: "userId",
});

Order.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});

Order.hasMany(Cart, {
  as: "cartItems",
  foreignKey: "orderId",
});

Cart.belongsTo(Order, {
  as: "order",
  foreignKey: "orderId",
});

Product.hasMany(Cart, {
  as: "cartItems",
  foreignKey: "productId",
});

module.exports = {
  db,
  models: {
    User,
    Order,
    Product,
    Cart,
  },
};

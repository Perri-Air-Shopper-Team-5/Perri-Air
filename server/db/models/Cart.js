const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      //set up references for sequelize to understand different tables and their associations
      model: "orders",
      key: "id",
    },
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "products",
      key: "id",
    },
  },
});

module.exports = Cart;

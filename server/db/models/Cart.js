const Sequelize = require("sequelize");
const db = require("../db");
const Order = require("./Order");
const Product = require("./Product");

const Cart = db.define("cart", {

    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            //set up references for sequelize to understand different tables and their associations
            model: Order,
            key: "id",
        },
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: "id",
        },
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    orderPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Cart;

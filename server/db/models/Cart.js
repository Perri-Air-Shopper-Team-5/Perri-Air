const Sequelize = require("sequelize");
const db = require("../db");

const Cart = db.define("cart", {
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "products",
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

const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Product;

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

    imageUrl: {
        type: Sequelize.STRING,
        defaultValue:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_vcDSavNE9UiF53l_RpMoHqz3WjqYIeq6uBwA9gs&s",
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Product;

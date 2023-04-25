const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
    pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
    logging: false,
};

if (process.env.LOGGING === "true") {
    delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
    config.dialectOptions = {
        ssl: {
            rejectUnauthorized: false,
        },
    };
}

const db = new Sequelize(
    //local db
    process.env.DATABASE_URL || `postgresql://localhost:5432/${databaseName}`,
    //deployment db
    //     process.env.DATABASE_URL ||
    //         `postgresql://elucero9:v2_43FJu_g2PHvWYKykLXf8GbKi3W9DE@db.bit.io:5432/elucero9/perri_air?ssl=true`,
    config
);
module.exports = db;

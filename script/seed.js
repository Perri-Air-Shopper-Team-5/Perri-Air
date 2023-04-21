"use strict";

const {
    db,
    models: { User, Product },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log("db synced!");

    // Creating Users
    const users = await Promise.all([
        User.create({
            username: "cody",
            password: "123",
            email: "cody@email.com",
        }),
        User.create({
            username: "murphy",
            password: "123",
            email: "murphy@email.com",
        }),
        User.create({
            username: "Dmitry",
            password: "Kaganovsky",
            adminStatus: true,
            email: "dmitry@email.com",
        }),
        User.create({
            username: "Adam",
            password: "Bojoh",
            adminStatus: true,
            email: "adam.bojoh@gmail.com",
        }),
        User.create({
            username: "Emmanuel",
            password: "Lucero",
            adminStatus: true,
            email: "emmanuel@email.com",
        }),
        User.create({
            username: "Alex",
            password: "Petrovich",
            adminStatus: true,
            email: "alex@email.com",
        }),
    ]);

    // Creating Products
    const products = await Promise.all([
        Product.create({
            name: "Tatooine Air Can",
            price: 10,
            quantity: 50,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099056802978611230/iu.png",
            description:
                "Breathe in the dusty, dry air of the desert planet Tatooine from Star Wars",
        }),
        Product.create({
            name: "Hoth Air Can",
            price: 15,
            quantity: 30,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099057482363580538/iu.png",
            description:
                "Experience the icy, cold air of the remote planet Hoth from Star Wars",
        }),
        Product.create({
            name: "Endor Air Can",
            price: 12,
            quantity: 40,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099057600357740664/iu.png",
            description:
                "Inhale the fresh, forest air of the moon Endor from Star Wars",
        }),
        Product.create({
            name: "Mordor Air Can",
            price: 20,
            quantity: 20,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099057746839601213/iu.png",
            description:
                "Breathe in the acrid, ash-filled air of the fiery realm of Mordor from Lord of the Rings",
        }),
        Product.create({
            name: "Rivendell Air Can",
            price: 25,
            quantity: 15,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099058030387142676/iu.png",
            description:
                "Enjoy the crisp, clean air of the elven city of Rivendell from Lord of the Rings",
        }),
        Product.create({
            name: "Disneyland Air Can",
            price: 8,
            quantity: 60,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099058512505602159/iu.png",
            description:
                "Experience the magical air of the happiest place on Earth, Disneyland from Disney",
        }),
        Product.create({
            name: "Arendelle Air Can",
            price: 18,
            quantity: 25,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099059145564491776/iu.png",
            description:
                "Breathe in the cool, icy air of the frozen kingdom of Arendelle from Disney",
        }),
        Product.create({
            name: "Konoha Air Can",
            price: 14,
            quantity: 35,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099059621123068096/iu.png",
            description:
                "Inhale the fresh, crisp air of the hidden leaf village from Naruto",
        }),
        Product.create({
            name: "Sunagakure Air Can",
            price: 16,
            quantity: 30,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099059848534032558/iu.png",
            description:
                "Experience the warm, dry air of the hidden sand village from Naruto",
        }),
        Product.create({
            name: "Kirigakure Air Can",
            price: 17,
            quantity: 28,
            imageUrl:
                "https://cdn.discordapp.com/attachments/1099056786595647610/1099060386478694540/iu.png",
            description:
                "Breathe in the moist, misty air of the hidden mist village from Naruto",
        }),
    ]);

    console.log(`seeded ${products.length} products`);
    console.log(`seeded ${users.length} users`);
    console.log(`seeded successfully`);
    return {
        users: {
            cody: users[0],
            murphy: users[1],
        },
    };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
    console.log("seeding...");
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        console.log("closing db connection");
        await db.close();
        console.log("db connection closed");
    }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
    runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

module.exports = app => {
    const tutorials = require("../controllers/users.controller.js");

    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/users", tutorials.create);

    // Retrieve all Tutorials
    router.get("/users", tutorials.findAll);

    app.use('/api/users', router);
};
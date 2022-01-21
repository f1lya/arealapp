module.exports = app => {
    const users = require("../controllers/users.controller.js");

    let router = require("express").Router();

    router.post("/", users.create);

    router.get("/", users.findAll);

    router.put('/:id', users.update);

    router.delete('/:id', users.delete);

    app.use('/api/users', router);
};
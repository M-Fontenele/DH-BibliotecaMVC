module.exports = app => {
    const locatarios = require("../controllers/locatario.controller");

    const router = require("express").Router();

    router.post("/", locatarios.create);
    router.get("/", locatarios.FindByStatusActive);
    router.delete("/:id", locatarios.delete);

    app.use("/api/biblioteca/locatario", router);
}
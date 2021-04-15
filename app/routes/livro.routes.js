module.exports = app => {
    const livros = require("../controllers/livro.controller");

    const router = require("express").Router();

    router.post("/", livros.create);

    router.get("/", livros.FindAll);

    router.get("/autor", livros.FindByAutor);

    router.put("/:id", livros.update);
    
    router.delete("/:id", livros.delete);

    app.use("/api/biblioteca/livro", router);
}
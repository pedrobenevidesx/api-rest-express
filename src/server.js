"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PORT = 3333;
// inicializando o express
var app = (0, express_1.default)();
app.get("/product/:id", function (req, res) {
    var id = req.params.id;
    res.send("Produto ".concat(id));
});
app.listen(PORT, function () { return console.log("Servidor est\u00E1 rodando na porta ".concat(PORT)); });

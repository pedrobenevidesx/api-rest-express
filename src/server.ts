import express from "express"

const PORT = 3333

// inicializando o express
const app = express()

app.get("/product/:id", (req, res) => {
    const { id } = req.params

    res.send(`Produto ${id}`)
})

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
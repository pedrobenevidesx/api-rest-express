import express from "express"

const PORT = 3333

// inicializando o express
const app = express()
app.use(express.json())

app.get("/product", (req, res) => {
    const { page, limit } = req.query

    res.send(`Produtos ${page} de ${limit}`)
})

app.post("/products", (req, res) => {
    const { name, price } = req.body

    res.send(`Produto ${name} custa ${price}`)
})

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
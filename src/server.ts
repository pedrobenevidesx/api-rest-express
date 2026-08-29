import express from "express"

const PORT = 3333

// inicializando o express
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world Express!")
})

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
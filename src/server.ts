import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"

const PORT = 3333

// inicializando o express
const app = express()

// Dizendo que vamos usar json
app.use(express.json())

app.use(routes)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: "Erro no servidor!" })
})

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes"
import { AppError } from "./utils/AppError"
import { ZodError } from "zod"

const PORT = 3333

// inicializando o express
const app = express()

// Dizendo que vamos usar json
app.use(express.json())

app.use(routes)

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message })

    }

    if (error instanceof ZodError) {
         return res.status(400).json({ message: "Validation error!", issues: error.format() })
    }

    res.status(500).json({ message: "Erro no servidor!" })
})

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
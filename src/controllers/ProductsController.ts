import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { z } from "zod"

export class ProductController {

    index(req: Request, res: Response) {
        const { page, limit } = req.query
        
        res.send(`Produtos ${page} de ${limit}`)
    }

    create(req: Request, res: Response) {
        const bodySchema = z.object({
            name: z
            .string({ required_error: "Name is required" })
            .trim()
            .min(4, { message: "Name must be 6 or more characters" }),

            price: z
            .number({ required_error: "Price is required" })
            .positive({ message: "Price must be positive" }),
        })

        const { name, price } = bodySchema.parse(req.body)

        /*
        if (!name) {
            throw new AppError("Nome do produto é obrigatório!")

        }
        if (!price) {
            throw new AppError("Preco do produto é obrigatório!")

        }
        */

        // throw new Error("Erro ao tentar criar um produto")
        // throw new AppError("Erro ao tentar criar um produto")

        res.status(201).json({ name, price, user_id: req.user_id })

    }

}
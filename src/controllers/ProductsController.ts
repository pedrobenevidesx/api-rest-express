import { Request, Response } from "express";

export class ProductController {

    index(req: Request, res: Response) {
        const { page, limit } = req.query
        
        res.send(`Produtos ${page} de ${limit}`)
    }

    create(req: Request, res: Response) {
        const { name, price } = req.body

        throw new Error("ERRO DE EXEMPLO")

        res.status(201).json({ name, price, user_id: req.user_id })

    }

}
import { Request, Response, NextFunction } from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {

    req.user_id = "1234"

    console.log("Passou pelo Middleware")

    return next()
}
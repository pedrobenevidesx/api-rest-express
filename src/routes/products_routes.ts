import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"
import { ProductController } from "../controllers/ProductsController"

const productsRoute = Router()
const productController = new ProductController()

productsRoute.get("/", productController.index)

productsRoute.post("/", myMiddleware, productController.create)

export { productsRoute }
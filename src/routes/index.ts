import { Router } from "express";
import { productsRoute } from "./products_routes";

const routes = Router()

routes.use("/products", productsRoute)

export { routes }
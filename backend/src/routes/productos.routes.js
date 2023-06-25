import {Router} from "express";

import {methodsHTTP as productosContollers } from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", productosContollers.getProductos);


export default router;
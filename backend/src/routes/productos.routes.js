import {Router} from "express";

import {methodsHTTP as productosContollers } from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", productosContollers.getProductos);
router.post("/", productosContollers.addProdductos);
router.get("/:id", productosContollers.getProductosId);
router.delete("/:id", productosContollers.deleteProducto);
router.put("/:id", productosContollers.updateProducto);



export default router;
// importamos el enrutador
import {Router} from "express";
//Importamos categoria controller
import {methodsHTTP as categoriaController} from "../controllers/categoria.controllers.js";


//Guardamos el enrutador en una varible
const router = Router();

//obtenemos la url base
router.get("/",categoriaController.getCategorias);
router.get("/:id",categoriaController.getCategoria);
router.post("/",categoriaController.addCategories);
router.delete("/:id",categoriaController.deleteCategoria);
router.put("/:id",categoriaController.updateCategories);


//Exportamos router
export default router;
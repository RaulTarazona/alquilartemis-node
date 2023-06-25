// importamos el enrutador
import {Router} from "express";
//Importamos categoria controller
import {methodsHTTP as categoriaController} from "../controllers/categoria.controllers.js";


//Guardamos el enrutador en una varible
const router = Router();

//obtenemos la url base
router.get("/",categoriaController.getCategorias);


//Exportamos router
export default router;
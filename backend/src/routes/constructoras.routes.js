import { Router } from "express";

import {methodsHTTP as constructoraController} from "../controllers/constructora.controllers.js";

//Guardamos el enrutador en una varible
const router = Router();

//obtenemos la url base
router.get("/",constructoraController.getConstructoras);


//Exportamos router
export default router;
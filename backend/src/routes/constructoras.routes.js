import { Router } from "express";

import {methodsHTTP as constructoraController} from "../controllers/constructora.controllers.js";

//Guardamos el enrutador en una varible
const router = Router();

//obtenemos la url base
router.get("/",constructoraController.getConstructoras);
router.post("/",constructoraController.addconstructora);
router.get("/:id",constructoraController.getConstructora);
router.delete("/:id",constructoraController.deleteConstructora);
router.put("/:id",constructoraController.updateConstructoras);
//Exportamos router
export default router;
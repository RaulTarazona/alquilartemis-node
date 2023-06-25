import {Router} from "express";

import {methodsHTTP as cotizacionesController } from "../controllers/cotizaciones.controllers.js";

const router = Router();

router.get("/", cotizacionesController.getCotizaciones);


export default router;
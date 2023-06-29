import {Router} from "express";

import {methodsHTTP as empleadosControllers } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", empleadosControllers.getEmpleados);
router.post("/", empleadosControllers.addEmpleados);
router.get("/:id", empleadosControllers.getEmpleadosId);
router.delete("/:id", empleadosControllers.deleteEmpleado);
router.put("/:id", empleadosControllers.updateEmpleado);




export default router;
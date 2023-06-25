//Importamos el framework express
import express from "express";
//Importamos el router
import categoriaRouter from "./routes/categorias.routes.js";
import constructoraRouter from "./routes/constructoras.routes.js";
import cotizacionesRouter from "./routes/cotizaciones.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import productosRouter from "./routes/productos.routes.js";
//Guardamos los rececursos del express en una constante
const app = express();

//puerto
app.set("port", 5000);

//Rutas
app.use("/api/categorias",categoriaRouter);
app.use("/api/constructora",constructoraRouter);
app.use("/api/cotizaciones",cotizacionesRouter);
app.use("/api/empleados",empleadosRouter);
app.use("/api/productos",productosRouter);

//exportamos la variable que contiene los recursos del framework express
export default app;
import getConnection from "../db/database.js";

const getCotizaciones = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT 	id_cotizacion, fk_id_empleado, fk_id_constructora, 	fecha_cotizacion, hora_cotizacion, 	dia_alquiler, 	duracion_alquiler FROM cotizaciones");
        console.log(result);
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCotizaciones
}
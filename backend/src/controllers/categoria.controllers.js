//importamos la funcion getConnection
import getConnection from "../db/database.js";

//Damos una respuesta
const getCategorias = async (req, res) =>{
  try {
    const connection = await getConnection(); 
    const result = await connection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria  FROM categorias ");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//Un objeto para todos los metodos HTTP

export const methodsHTTP = {
    getCategorias
}
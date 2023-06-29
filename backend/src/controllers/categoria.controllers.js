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



//Creamos una funcion para poder añadir los datos
const addCategories = async (req, res)=>{
  try {
    // Se destructura los datos de la tabla 
    const {nombre_categoria,descripcion_categoria,img_categoria } = req.body
    
    // se crea un objeto para mandar las variables
    const category = {
      nombre_categoria,
      descripcion_categoria,
      img_categoria
    }

    //Se crea la conexion
    const connection = await getConnection(); 
    
    const result = await connection.query("INSERT INTO categorias SET ?",category);
    
    res.json({result});

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}




//Seleccionar una sola caegoria
const getCategoria = async (req, res) =>{
  try {
    console.log(req.params);
    const {id} = req.params;
    const connection = await getConnection(); 
    const result = await connection.query("SELECT *  FROM categorias WHERE id_categoria = ? ", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


const deleteCategoria = async (req, res) =>{
  try {
    const {id} = req.params;
    const connection = await getConnection(); 
    const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ? ", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


//Creamos una funcion para poder añadir los datos
const updateCategories = async (req, res)=>{
  try {
    const {id} = req.params;
    const {nombre_categoria,descripcion_categoria,img_categoria } = req.body
    
    // se crea un objeto para mandar las variables
    const category = {
      nombre_categoria,
      descripcion_categoria,
      img_categoria
    }

    //Se crea la conexion
    const connection = await getConnection(); 
    
    const result = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?",[category,id]);
    
    res.json({result});

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


//Se exportan los metodos 
export const methodsHTTP = {
  getCategorias,
  addCategories,
  getCategoria,
  deleteCategoria,
  updateCategories
}
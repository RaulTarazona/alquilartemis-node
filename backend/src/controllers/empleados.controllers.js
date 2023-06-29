//importamos la funcion getConnection
import getConnection from "../db/database.js";

//Damos una respuesta
const getEmpleados = async (req, res) =>{
  try {
    const connection = await getConnection(); 
    const result = await connection.query("SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado  FROM empleados");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const addEmpleados = async (req,res)=>{
  try {
      //Se destructora los datos de la tabla 
      const {nombre_empleado,email_empleado,celular_empleado,password_empleado,} = req.body
      //Objeto para los datos destructurados
      const empleados = {
          nombre_empleado,
          email_empleado,
          celular_empleado,
          password_empleado,
      }
      //Se crea la conexion 
      const connection = await getConnection();
      const result = await connection.query("INSERT INTO empleados SET ?",empleados)

      res.json({result});
  } catch (error) {
      res.status(500);
      res.send(error.message);
  }
}



const getEmpleadosId = async (req, res) =>{
  try {
    console.log(req.params);
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM empleados WHERE id_empleado = ? ",id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
}
}

const deleteEmpleado = async (req, res) =>{
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM empleados WHERE id_empleado = ? ",id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

const updateEmpleado = async (req, res) =>{
  try {
    const {id} = req.params;
    const {nombre_empleado,email_empleado,celular_empleado,password_empleado,} = req.body
      //Objeto para los datos destructurados
      const empleados = {
          nombre_empleado,
          email_empleado,
          celular_empleado,
          password_empleado,
      }
      //Se crea la conexion 
      const connection = await getConnection();
      const result = await connection.query("UPDATE empleados SET ? WHERE id_empleado = ?",[empleados,id])
      console.log(result);
      res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


//Exportamos los metodos 

export const methodsHTTP = {
  getEmpleados,
  addEmpleados,
  getEmpleadosId,
  deleteEmpleado,
  updateEmpleado
}

import getConnection from "../db/database.js";

const getConstructoras = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_constructora, 	nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}


const addconstructora = async (req,res)=>{
    try {
        //Se destructora los datos de la tabla 
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body
        //Objeto para los datos destructurados
        const constructora = {
            nombre_constructora,
            nit_constructora,
            nombre_representante,
            email_contacto,
            telefono_contacto
        }
        //Se crea la conexion 
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO constructoras SET ?",constructora)

        res.json({result});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const getConstructora = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras WHERE id_constructora = ?", id);
        console.log(result)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteConstructora = async (req, res)=>{
    try {
        const {id}= req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM  constructoras WHERE id_constructora=? ",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateConstructoras = async (req,res)=>{
    try {
        //Se destructora los datos de la tabla 
        const {id}= req.params
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body
        //Objeto para los datos destructurados
        const constructora = {
            nombre_constructora,
            nit_constructora,
            nombre_representante,
            email_contacto,
            telefono_contacto
        }
        //Se crea la conexion 
        const connection = await getConnection();
        const result = await connection.query("UPDATE constructoras SET ? WHERE id_constructora = ? ",[constructora,id])

        res.json({result});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


//Exportamos los metodos 

export const methodsHTTP = {
    getConstructoras,
    addconstructora,
    getConstructora,
    deleteConstructora,
    updateConstructoras


}

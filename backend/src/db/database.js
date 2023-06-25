//Importamos mysql
import mysql from "promise-mysql";
//Importamos config
import config from "./../config.js";

//hacemos unaa constante para la conexion

const connection = mysql.createConnection({
    host: config.host,
    database : config.database,
    user : config.user,
    password : config.password
});

//retornamos la variable como funcion

const getConnection = ()=>{
    return connection;
}

//importamos la funcion que contiene todas las llaves
export default getConnection

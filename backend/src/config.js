//importamos el paquete config
import {config} from "dotenv";

config();

//Exportamos config con los valores del .env

export default {
    host : process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}
//importamos el app
import app from "./app.js";

//Metodo main
const main = ()=>{
    //obtenemos el puerto 
    app.listen(app.get("port"));
    console.log(`the company  running ${app.get("port")}`);
}

main();
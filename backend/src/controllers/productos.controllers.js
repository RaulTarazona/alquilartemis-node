import getConnection from "../db/database.js";

const getProductos = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT productos.id_producto,productos.nombre_producto,productos.precio_x_dia,productos.stock_producto,categorias.nombre_categoria FROM productos JOIN categorias ON productos.categoria_producto = categorias.id_categoria")
        console.log(result);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}


const addProdductos = async (req,res)=>{
    try {
        //Se destructora los datos de la tabla 
        const {nombre_producto,precio_x_dia,stock_producto,	categoria_producto,} = req.body
        //Objeto para los datos destructurados
        const productos = {
            nombre_producto,
            precio_x_dia,
            stock_producto,
            categoria_producto,
        }
        //Se crea la conexion 
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?",productos)
  
        res.json({result});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  }

  const getProductosId = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos WHERE id_producto = ?",id);
        console.log(result);
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  }

  const deleteProducto = async (req, res)=> {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id_producto = ? ",id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  }

  const updateProducto = async (req, res) =>{
    try {
          const {id} = req.params;
         
          const {nombre_producto,precio_x_dia,stock_producto,	categoria_producto,} = req.body
          const productos = {
              nombre_producto,
              precio_x_dia,
              stock_producto,
              categoria_producto,
          }
          //Se crea la conexion 
          const connection = await getConnection();
          const result = await connection.query("UPDATE productos SET ? WHERE id_producto = ?",[productos,id])
    
          res.json({result});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  }
  

export const methodsHTTP = {
    getProductos,
    addProdductos,
    getProductosId,
    deleteProducto,
    updateProducto
} 


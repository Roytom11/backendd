const {query} = require("../config/connection.sql")


const insertarProducto = async (titulo, descripcion, precio, stock, codigo) => {
    try {
        const consultaString = 'INSERT INTO productos (titulo, descripcion, stock, precio, codigo) VALUES (?,?,?,?,?)'
    const valores = [titulo, descripcion, stock, precio, codigo]
    const resultado = await query(consultaString, valores)   
    console.log(resultado)
    return resultado.insertId
    }
    catch(error){
        console.log(error)
        throw {status:500, message: 'Error interno en el servidor'}
    }
    
}
const seleccionarProductoPorId = async (pid) => {
    try {
            const consultaString = 'SELECT * FROM productos WHERE id = ?'  
    const resultado = await query(consultaString, [pid])   
    console.log(resultado)
    if(resultado.length === 0 ){
        throw {status: 404, message: 'producto con id' + pid + 'no encontrado'}
    }
    else{
        return resultado [0]
    }
    }
    catch(error){
        console.log(error)
        if(error.status === 400){
            throw error
        }
        else{
            throw {status:500, message: 'Error interno en el servidor'}
        }
    }
}


const deleteProductPorId = async (pid) => {
    try {
            const consultaString = 'DELETE * FROM productos WHERE id = ?'  
    const resultado = await query(consultaString, [pid])   
    console.log(resultado)
    if(resultado.length === 0 ){
        throw {status: 404, message: 'producto con id' + pid + ' eliminado correctamente '}
    }
    else{
        return resultado [0]
    }
    }
    catch(error){
        console.log(error)
        if(error.status === 400){
            throw error
        }
        else{
            throw {status:500, message: 'Error interno en el servidor'}
        }
    }
}

const seleccionarProductos = async () => {
    try {
        const consultaString = 'SELECT * FROM productos'
        const productos = await query(consultaString)
        return productos
    }
    catch(error){
        if(error.status){
            throw error
        } 
        else{
            throw {status:500, message: 'Error interno en el servidor'}
        }
    }
}

module.exports = { insertarProducto , seleccionarProductoPorId , deleteProductPorId, seleccionarProductos }
const { validacionEmail, validacionExistencia } = require("../helpers/validation.helper")
const { insertarProducto, seleccionarProductoPorId } = require("./products.repository")
const { validarPropiedadesProducto } = require("./utils/validarProducto")


const crearProducto = async (producto) => {
    try{
        console.log(producto)
       const paso = validarPropiedadesProducto(producto)
       if (paso) {
        const resultado = await insertarProducto(producto)

        return {ok:true,message:`Producto creado con id ${idCreado} `, idCreado:idCreado}
       }
       else {
        throw {status:400, message: 'Exeption: No se pasaron las validaciones del producto'}
       }
    }
    catch(error) {
        if(error.status){
                throw error
        }
        else{
            throw {status: 500, message: 'Error interno del servidor service de insertar'}
        }
    }

}


const obtenerProductoPorId = async (pid) => {
    try {
        const producto = await seleccionarProductoPorId(pid)
        return {ok: true, status:200, producto}

    }
    catch(error){
        if(error.status){
            throw error
        }
        else{
            throw {status:500, message: 'Error interno del servidor'}
        }
    }

}

const buscarProductos = async () => {
    try {
        const productos = await seleccionarProductoPorId ()
        if(productos.length === 0){
            throw {status:404, message: 'No hay productos'}
        }
        return{status:200, message:'Error interno del servidor'}
    }
    catch(error){
        throw error
    }
}
    


module.exports = {crearProducto, obtenerProductoPorId, buscarProductos}



const validarIngresoProducto = (valor) => {
    const propiedades = [valor.titulo, valor.descripcion, valor.codigo, valor.titulo, valor.precio, valor.stock]
    for (let property in productToCreate){
        propiedades.includes(property)
        if(!propiedades.includes(property)){
            throw {message: `Property ${property} is required`, status: 400}
        }
    }
}



module.exports = {validacionEmail, validacionExistencia, validacionString, validacionLongitud, validacionStock, validacionCodigo, validacionFecha, validarIngresoProducto, validacionPassword}




        // const {descripcion, titulo, precio, stock, codigo} = producto
        // console.log(producto)
        // validacionProducto({descripcion, titulo, precio, stock, codigo})
        // const verificarTitulo = await validacionString(producto.titulo)
        // console.log(producto.titulo)
        // if(!verificarTitulo){
        //     throw {message: 'Title incorrect, The title must be string and must be more than 3 characters', status: 400}
        // }
        // const verificarStock = await validacionStock(producto.stock)
        // if(!verificarStock){
        //     throw {message: 'Stock incorrect, The title must be numeric and must be more than 1 characters', status: 400}
        // }
        // const verificarLongitud = await validacionLongitud(producto.descripcion)
        // if(!verificarLongitud){
        //     throw {message: 'Description incorrect, must be more than 20 characters', status: 400}
        // }
        // const verificarCodigo = await validacionCodigo(producto.codigo)
        // if(!verificarCodigo){
        //     throw {message: 'Code incorrect, must be more than 1 characters', status: 400}
        // }
        // const verificarFecha = await validacionFecha(producto.fecha)
        // if(!verificarFecha){
        //     throw {message: 'Date incorrect, must be more than 1 characters', status: 400}
        // }
        // return {ok:true, message: `Producto ${producto.titulo} registrado correctamente`}

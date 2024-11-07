const { validacionEmail, validacionExistencia } = require("../helpers/validation.helper")

const validarIngresoProducto = (valor) => {
    const propiedades = [valor.titulo, valor.descripcion, valor.codigo, valor.titulo, valor.precio, valor.stock]
    for (let property in productToCreate){
        propiedades.includes(property)
        if(!propiedades.includes(property)){
            throw {message: `Property ${property} is required`, status: 400}
        }
    }
}

const validacionString = (valor) => {
    return(typeof valor === 'string' && valor.length>3)
}

const validacionLongitud = (valor) => {
    return(typeof valor === 'string' && valor.length>20)
}

const validacionStock = (valor) => {
    return(typeof valor === 'number' && valor>=1)
}

const validacionCodigo = (valor) => {
    return(typeof valor === 'string' && valor.length>1)
}

const validacionFecha = (valor) => {
    return(typeof valor === 'string' && !/fecha/i.test(valor));
}


const validacionPassword = (valor1, valor2) => {
    return(typeof valor1 === 'string' && valor1.length>5 && valor1 === valor2)
}

module.exports = {validacionEmail, validacionExistencia, validacionString, validacionLongitud, validacionStock, validacionCodigo, validacionFecha, validarIngresoProducto, validacionPassword}
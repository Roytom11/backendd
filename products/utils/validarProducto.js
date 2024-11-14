const PROPIEDADES_NECESARIAS = ['titulo', 'precio', 'stock', 'codigo', 'descripcion']
const VALIDACIONES_PRODUCTO = {
    'precio' : {
        validacion: (valor) => {
        return Boolean(valor) && !isNaN (valor) && valor > 1
    },
    errorText: 'Precio es un valor nulo o no es un numero'
}, 
'titulo' : {
        validacion: (valor) => {
        return Boolean(valor) && (typeof(valor) === 'string') && valor.length>3
    },
    errorText: 'Precio es un valor nulo o no es un numero'
}, 
'stock' : {
    validacion: (valor) => {
        return(Boolean(valor) && !isNaN(valor) && valor>=1)
    } ,
    errorText: 'El stock debe ser un numero valido mayor a 1'
},
'descripcion' : {
    validacion: (valor) => {
        return(Boolean(valor) && !isNaN(valor) && valor.length>20 && typeof(valor) === 'string')
    } ,
    errorText: 'La descripcion debe ser un string de mas de 20 caracteres'
},
'codigo' : {
    validacion: (valor) => {
        return(Boolean(valor)  && alor.length>3)
    } ,
    errorText: 'El codigo debe ser un string valido mayor a 3 caracteres'
 }
}



const validarPropiedadesProducto = (producto) =>{
    try {
        const porpiedades_producto = Object.keys(producto)
        const PROPIEDADES_NECESARIAS = ['titulo', 'precio', 'stock', 'codigo', 'descripcion']
        const propiedades_faltantes = []
        const propiedades_sobrantes = []
        for(let propiedad_necesaria of PROPIEDADES_NECESARIAS){ 
            if(!porpiedades_producto.includes(propiedad_necesaria)){
                propiedades_faltantes.push(propiedad_necesaria)
            }
        }
        if(propiedades_faltantes.length > 0){
            throw {status: 400, message: 'faltan las propiedades [' + propiedades_faltantes.join(', ') + ']' }
        }
        for(let propiedad of porpiedades_producto) {
            if(!PROPIEDADES_NECESARIAS.incluedes(propiedad)){
                propiedades_sobrantes.push(propiedad)
            }
    
        }
    
        if(propiedades_sobrantes.length > 0){
            throw {status: 400, message: 'sobran las propiedades [' + propiedades_sobrantes.join(', ') + ']' }
        }
        for (let propiedad in VALIDACIONES_PRODUCTO) {
            let valor = producto[propiedad]
            if(!VALIDACIONES_PRODUCTO[propiedad].validacion(valor)) {
                throw {status: 400, message: VALIDACIONES_PRODUCTO[producto].errorText}
            }
            return true
        }
    }
    catch(error){
        throw error
    }
}


// const validacionString = (valor) => {
//     return(typeof valor === 'string' && valor.length>3)
// }

// const validacionDescripcion = (valor) => {
//     return(typeof valor === 'string' && valor.length>20)
// }

// const validacionStock = (valor) => {
//     return(typeof valor === 'number' && valor>=1)
// }

// const validacionCodigo = (valor) => {
//     return(typeof valor === 'string' && valor.length>1)
// }

// const validacionPrecio = (valor) => {
    
// }


module.exports = {validarPropiedadesProducto}
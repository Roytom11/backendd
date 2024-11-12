const validarPropiedadesProducto = (producto) =>{
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

}
module.exports = {validarPropiedadesProducto}
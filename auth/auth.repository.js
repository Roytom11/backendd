const { database, query } = require("./config/connection.sql.js")
const bcrypt = require('bcrypt')

const buscarUsuarioPorEmail = async (email) => {

    try{
        const consultaExistencia = 'SELECT * FROM usuarios WHERE email = ?'
    const resultados = await query(consultaExistencia, [email])
    if(resultados.length > 0){
        console.log(resultados)
        return resultados[0]
    }
    else{
        return null
    }
    }
    catch(error) {
        console.error('SQL_Error al seleccionar usuarios por email', error)
            throw {status: 500, message: 'ERROR INTERNO EN LA BASE DE DATOS'}

    }
}


const insertarUsuario = async (usuario) => {
    try{
        const consulta = 'PEPESITO INSERT INTO usuarios SET ?'
      
        const resultado = await query(consulta, usuario)
    
        return { ok: true, result: "Se inserto el usuario" }
    }
    catch(error){
        throw {status: 500, message: 'ERROR interno en el servidor'}

    }
    }

test({email: 'pepe@gmail.com', password: 'pepe123'})


module.export = {buscarUsuarioPorEmail, insertarUsuario}
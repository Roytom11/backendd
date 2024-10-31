const { validacionEmail, validacionExistencia } = require("../../helpers/validation.helper")
const { buscarUsuarioPorEmail, insertarUsuario } = require("./auth.repository")
const { validacionUsuario } = require("./validationUser.util")


const registerService = async (usuario) => {
    try{  
    const {email, password} = usuario
    validacionUsuario({email, password})
   
    
        const usuarioExistente = await buscarUsuarioPorEmail(usuario.email)
    
        if(usuarioExistente){
            throw {status: 400, message: 'ERROR: email ya registrado'}
        }
        const passwordHash = await bcrypt.hash(usuario.password, 10)
        const result = await insertarUsuario({email: usuario.email, password: passwordHash})
        if(result){
            return {ok: true, message: 'Se inserto un usuario'}
        }
      
        return result
    }
    catch(error){
        if(error.status){
            throw error
        }
        throw {status: 500, message: 'ERROR interno en el servidor'}
  
}
}



module.exports = {registerService}
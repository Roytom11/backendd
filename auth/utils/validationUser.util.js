const { validacionExistencia } = require("../../helpers/validation.helper")

const validacionUsuario = (usuario) => {
    if(!validacionExistencia (usuario.email)){
        throw {message: 'Inexistent  email or password', status:400}
    }
    if( !validacionExistencia(usuario.password)){
        throw {message: 'Inexistent password', status:400}
    }

    if(!validacionEmail(usuario.email)){
        throw {merssage: 'Email incorrect', status: 400}
    }
    
}

module.exports = { validacionUsuario } 
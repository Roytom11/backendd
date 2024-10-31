const validacionEmail = (email) => {
    return (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ .test(email))
}

const validacionExistencia = (valor) => {
    return Boolean(valor)
}

module.exports = {validacionEmail, validacionExistencia}
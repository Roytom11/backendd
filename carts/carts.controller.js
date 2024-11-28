

const postCartsController =  async (req, res) => {
    try {
        await agregarAlCarrito() 
    }
    catch(error){
        res.status(error.status).json(error)
    }
}

module.exports = {postCartsController}
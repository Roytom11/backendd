const { getAllProducts, postProductController, deleteProductByIdController, getProductByIdController } = require("./products.controller")

productRouter.get('/', getAllProducts)
productRouter.post('/', postProductController)
productRouter.put('/')
productRouter.delete('/:pid', deleteProductByIdController)
productRouter.get('/:pid', getProductByIdController)

module.exports  = {productRouter}
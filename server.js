const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const {database} = require('./config/connection.sql')

const { authRouter } = require('./auth/auth.route')
const { productRouter } = require('./products/products.router')



const PORT = process.env.PORT || 4040
const app = express()
app.use(express.json())

app.use(cors())
app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)

app.listen(PORT, () =>{
    console.log('Nuestra aplicacion se ejecuta en el puerto: ' + PORT)
})  
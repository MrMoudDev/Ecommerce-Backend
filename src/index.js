const express = require('express')
const app = express()
const cors = require('cors')
const dbConnection = require ('./config/mongo.config.js' )
const port = process.env.PORT

dbConnection()
app.use(cors())
app.use(express.json())

app.use( '/api/categories', require('./routes/categories.routes.js'))
app.use( '/api/products', require('./routes/product.routes.js'))


app.listen ( port,() => {
    console.log('El servidor esta corriendo en el servidor ', port)
})
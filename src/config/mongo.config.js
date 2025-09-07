const mongoose = require ('mongoose')
const { ensureIndexes } = require('../models/product.model')

const dbConnection = async () => {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/e-commerce', {} )
        console.log('La base de datos se conecto correctamente')
        await ensureIndexes()
    } catch (error) {
        console.error('La base no se pudo conectar')
        throw new Error('Error al inicializar la base de datos')
    }
}

module.exports = dbConnection
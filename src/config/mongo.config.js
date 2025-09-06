const mongoose = require ('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/e-commerce', {} )
        console.log('La base de datos se conecto correctamente')
    } catch (error) {
        console.error('La base no se pudo conectar')
        throw new Error('Error al inicializar la base de datos')
    }
}

module.exports = dbConnection
const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        unique:[true, "Usuario ya existe"]
    },
    password: {
        type: String,
        required: true,
        min: [8, 'La contraseña debe tener minimo 8 digitos'],
        max: [15, 'La contraseña debe tener maximo 15 digitos']
    },
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    genero: {
        type: String,
        enum: ['masculino', 'femenino', 'otro']
    },
    fechadenacimiento: {
        type: Date
    },
    codigopostal: {
        type: Number
    }
},{
    timestamps: true
})

const userModel = mongoose.model( 'users', userSchema)
module.exports = userModel
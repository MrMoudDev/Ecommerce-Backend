const mongoose = require ( 'mongoose')

const ProductSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'La cantidad es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    quantity: {
        type: Number,
        required: [true, 'La cantidad es obligatorio'],
        min: [1, 'La cantidad minima a registrar es 1 ']
    },
    category: {
        type: String,
        required: [true, 'La categoria es obligatoria'],
        default: 'non-category'
    },
    urlImage: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
})

const ProductModel = mongoose.model('products', ProductSchema)
module.exports = ProductModel
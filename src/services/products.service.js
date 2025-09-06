const ProductModel = require("../models/product.model");

async function dbpostProduct ( newProduct) {
    return await ProductModel.create(newProduct)
}

async function dbgetProduct () {
    return await ProductModel.find({})
}

async function dbgetProductsById ( id ) {
    return await ProductModel.findOne({_id:id})
}

async function dbdeleteProductsById ( id ) {
    return await ProductModel.findOneAndDelete(id)
}

async function dbpatchProductById( id, updateProduct ) {
    return await ProductModel.findByIdAndUpdate(id, { $set: updateProduct}, {new: true, runValidators: true})
}

async function dbputProductById(id, updateProduct) {
    return await ProductModel.findOneAndReplace({_id:id}, updateProduct, {new:true, runValidators: true})
}

module.exports = {
    dbpostProduct,
    dbpatchProductById,
    dbputProductById,
    dbgetProduct,
    dbgetProductsById,
    dbdeleteProductsById
}
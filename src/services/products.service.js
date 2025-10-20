const {ProductModel} = require("../models/product.model");

async function dbpostProduct ( newProduct) {
    return await ProductModel.create(newProduct)
}

async function dbGetProductsPage ( page, pageSize, filter) {
    return await ProductModel.find(filter)
        .skip(( page - 1 ) * pageSize)
        .limit(pageSize)
        .sort({createAt: -1 })
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
    dbGetProductsPage,
    dbpostProduct,
    dbpatchProductById,
    dbputProductById,
    dbgetProduct,
    dbgetProductsById,
    dbdeleteProductsById
}
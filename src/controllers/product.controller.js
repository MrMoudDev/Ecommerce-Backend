const { handleResponseSucess, handleResponseError } = require("../helpers/handleResponse")
const ProductModel = require("../models/product.model")
const { dbpostProduct, dbputProductById, dbgetProduct, dbgetProductsById, dbpatchProductById, dbdeleteProductsById } = require("../services/products.service")

async function getProducts (req, res) {
    try {
        const data = await dbgetProduct()
        handleResponseSucess( res, 200, data)
    }
    catch ( error ) {
        handleResponseError( res, 500, error, 'Error al obetener el producto')
    }
}

async function getProductsById ( req, res) {
    const productId = req.params.id

    try {
        const data = await dbgetProductsById( productId )

        if ( !data ) {
            handleResponseError( res, 404, 'Producto no encontrado')
            // return res.status (400).json({ok: false, msg: 'Producto no encontrado'})
        }
            handleResponseSucess( res, 200, data)
    } catch ( error ) {
        handleResponseError (res, 500, 'Error al obtener los productos por Id', error)
    }
}

async function postProduct (req, res) {
    const inputData = req.body

    try {
        const data = await dbpostProduct( inputData )

        handleResponseSucess( res, 201, data)

    } catch (error) {

        const errors = {}

        if ( error.name === 'ValidationError') {
            for( let property in error.errors) {
                // console.log('>>>', property)
                errors[property] = error.errosrs[property].message
            }
        }
        console.log(errors)
            handleResponseError(res, 500, error, 'Erorr al registrar el producto')
    }
}

async function putProductById ( req, res) {
    const productId = req.params.id
    const inputData = req.body

    try {
        const data = await dbputProductById(productId, inputData)

        if ( !data ) {
            handleResponseError(res, 404, 'Producto no encontrado')
            // return res.status(404).json({ok: false, msg: 'Producto no encontrado'})
        }
        handleResponseSucess( res, 200, data)

    } catch (error) {
        handleResponseError(res, 500, error, 'Error al actualizar tus productos')
    }
}

async function deleteProductById (req, res) {
    const productId = req.params.id

    try {
        const data = await dbdeleteProductsById( productId )

        if ( !data ) {
            return handleResponseError ( res, 404, 'Producto no encontrado')
            // return res.status(404).json({ok: false, msg: 'Producto no encontrado'})
        }
        handleResponseSucess( res, 200, data)

    } catch (error) {
        handleResponseError(res, 500, 'Erorr al eliminar el producto', error )
    }
}

async function patchProductById (req, res) {
    const productId = req.params.id
    const inputData = req.body

    try {

        const data = await dbpatchProductById( productId, inputData)
        if ( !data ) {
            handleResponseError(res, 404, 'Producto no encontrado')
            // return res.status(404).json({ok: false, msg: 'Producto no encontrado'})
        }
        handleResponseSucess( res, 200, data)

    } catch (error) {

        const errors = {}

        if ( error.name === 'ValidationError') {
            for( let property in error.errors) {
                // console.log('>>>', property)
                errors[property] = error.errosrs[property].message
            }
        }
        handleResponseError(res, 500, error, 'Erorr al actualizar el producto')
    }

}

module.exports = {
    getProducts,
    postProduct,
    putProductById,
    patchProductById,
    deleteProductById,
    getProductsById,
}
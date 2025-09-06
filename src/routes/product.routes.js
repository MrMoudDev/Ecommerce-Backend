const { Router } = require( 'express' );
const { getProducts, getProductsById, postProduct, putProductById, patchProductById, deleteProductById } = require('../controllers/product.controller');
const router = Router();

router.get('/', getProducts)
router.post('/', postProduct)
router.get('/:id', getProductsById)
router.put('/:id', putProductById)
router.patch('/:id', patchProductById)
router.delete('/:id', deleteProductById)


module.exports = router
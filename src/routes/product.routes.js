const { Router } = require( 'express' );
const { getProducts, getProductsById, postProduct, putProductById, patchProductById, deleteProductById } = require('../controllers/product.controller');
const authUser = require('../middlewares/auth.user.middlewares');
const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductsById)

router.post('/', authUser ,postProduct)
router.put('/:id', authUser,  putProductById)
router.patch('/:id', authUser, patchProductById)
router.delete('/:id', authUser, deleteProductById)


module.exports = router
const { Router } = require( 'express' );
const {getProductsById, postProduct, putProductById, patchProductById, deleteProductById, getProductsPage } = require('../controllers/product.controller');
const authUser = require('../middlewares/auth.user.middlewares');
const router = Router();

router.post('/', authUser ,postProduct)
router.put('/:id', authUser,  putProductById)
router.patch('/:id', authUser, patchProductById)
router.delete('/:id', authUser, deleteProductById)
// router.get( '/all' , getProducts)
router.get( '/ref/:id' , getProductsById)
router.get( '/:category?/:page?/:pageSize?' , getProductsPage)





module.exports = router
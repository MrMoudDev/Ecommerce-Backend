const { Router } = require("express")
const router = Router()
const { getCategoryById, postCategory, getCategory, deleteCategoryById, putCategoryById, patchCategoryById } = require("../controllers/category.controller")


router.get('/', getCategory)
router.post('/', postCategory)
router.get('/:id', getCategoryById)
router.patch('/:id', patchCategoryById)
router.put('/:id', putCategoryById)
router.delete('/:id', deleteCategoryById)


module.exports = router
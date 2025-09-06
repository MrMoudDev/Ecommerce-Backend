const getCategory = (req, res) => {
    res.json({
        ok:true,
        msg: 'Obtienes las categorias'
    })
}

const postCategory = (req, res) => {
    res.json({
        ok:true,
        msg: 'Crea tus categorias'
    })
}

const getCategoryById = (req, res) => {
    res.json({
        ok:true,
        msg: 'Obtienes las categorias por ID'
    })
}

const patchCategoryById = ( req, res) => {
    res.json({
        ok:true,
        msg: 'Actualiza tus categorias'
    })
}

const putCategoryById = (req, res) => {
    res.json({
        ok:true,
        msg: 'Actualiza tus categorias'
    })
}

const deleteCategoryById = (req, res) => {
    res.json({
        ok:true,
        msg:'Elimina tus categorias'
    })
}

module.exports = {
    getCategory,
    getCategoryById,
    deleteCategoryById,
    putCategoryById,
    patchCategoryById,
    postCategory
}
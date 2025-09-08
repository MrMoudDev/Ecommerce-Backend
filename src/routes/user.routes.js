const express = require ('express')
const authUser = require ('../middlewares/auth.user.middlewares.js')
const router = express.Router()
const {createUser, login, renewToken} = require('../controllers/user.controller.js')


router.post('/register', createUser )
router.post('/login', login )
router.get('/re-new-token', authUser, renewToken )


module.exports = router


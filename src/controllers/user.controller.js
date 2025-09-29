const { handleResponseError, handleResponseSucess } = require("../helpers/handleResponse");
const { generateToken } = require("../helpers/jwt.helper");
const userModel = require('../models/user.model.js')

const getUsers = async ( req, res) => {
    try {
        const data = await userModel.find().select("-password")
        handleResponseSucess( res, 200, data)
    } catch (error) {
        handleResponseError ( res, 500, 'Error al obtener los usuarios', error)
    }
}

const login = async ( req, res ) => {
    try {
        const inputData = req.body
        const user = await userModel.findOne({email:inputData.email})
        if (!user) return res.send ('No existe el usuario')

            console.log('input:', inputData)
            console.log('mongo:', user)

            if (inputData.password === user.password) {
                const token = generateToken({id: user._id, email: user.email})
                return res.json({token, user })
            } else {
                res.json({msg: 'Contraseña incorrecta'})
            }
            handleResponseSucess( res, 200, data)
        }  catch (error) {
            handleResponseError ( res, 500, 'EL usuario ya existe', error)
        }
    }

const getUserById = async ( req, res) => {
    const userId = req.params.id

    try {
        const data = await userModel.findById( userId )
        handleResponseSucess ( res, 200, data)
    } catch (error) {
        handleResponseError(res, 500, 'Error al obtener el usuario', error)
    }
}

const createUser = async (req, res) => {
    const inputData = req.body

    try {

        const userExist = await userModel.findOne({ email:inputData.email })

        if (userExist) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        const userRegistered = await userModel.create( inputData )
        res.json({userRegistered})

    } catch (error) {
        handleResponseError ( res, 500, 'Error al registrar el usuario', error)
    }
}

const renewToken = async ( req, res) => {
    const Payload = req.authUser

    const data = await userModel.findOne({ email: Payload.email })

    if (!data)
        return res.json({msg:'Usuario no existe'})

    const token = generateToken(Payload)

    res.json({ token, user: data })
}

module.exports = {
    handleResponseError,
    getUsers,
    renewToken,
    login,
    getUserById,
    createUser
}

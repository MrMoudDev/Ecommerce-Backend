const {verifyToken} = require('./../helpers/jwt.helper.js')


const authUser = (req, res, next) => {
    const token = req.header("x-token")   //Extraemos el token de la cabecera


    //Verifica que el token no venga vacio
    if(! token ){
        return res.json({msg: "Error: al obtener el token"})
    }

    try {

        const payload = verifyToken(token)

        console.log({ payload })

        //Eliminamos propiedades adicionales
        delete payload.iat;
        delete payload.exp

        //Crear una propiedad en el objeto request de express y guardarlo en el paylod
        req.authUser = payload

        next()

    }
    catch (error) {
        res.json({msg: "Error al autenticar el usuario"})
    }
}

module.exports =  authUser
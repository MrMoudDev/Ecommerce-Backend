
const handleResponseSucess = ( res, statusCode, data) => {

    res.status(statusCode).json({ ok:true, data: data })
}

const handleResponseError = ( res, statusCode, msg, error) => {

    const responseObject = {ok:false, msg:msg}

    const errors = verifyIfError(error)

    if ( Object.keys( errors ).length > 0) {
        responseObject.errors = errors
    }

    res.status(statusCode).json(responseObject)
}

const verifyIfError = ( error ) => {

    const errors = {}

        if ( error.name === 'ValidationError') {
            for( let property in error.errors) {
                // console.log('>>>', property)
                errors[property] = error.errors[property].message
            }
        }

        if (error.code === 11000 ){
            errors['_id']= 'La referencia ya existe, debe tener un valor único'
        }

        return errors
}

module.exports = {
    handleResponseSucess,
    handleResponseError,
    verifyIfError
}
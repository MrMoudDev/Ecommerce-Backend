const handleResponseSucess = ( res, statusCode, data) => {

    res.status(statusCode).json({ ok:true, data: data })
}

const handleResponseError = ( res, statusCode, msg, error) => {
    if(error) {
        console.error( error )
    }

    res.status(statusCode).json({ ok:false, msg:msg, errors: 'Aqui van los errores de los campos'})
}

module.exports = {
    handleResponseSucess,
    handleResponseError
}
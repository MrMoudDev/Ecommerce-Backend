const jwt = require ("jsonwebtoken")

const generateToken = (payload) => {

    console.log( payload );

    const token = jwt.sign(
        payload,
        process.env.JWT_SEED,
        {expiresIn: "1h"}
    )

    return token;
}

const verifyToken = ( token ) => {
    const payload = jwt.verify(
        token,
        process.env.JWT_SEED,
    )

    return payload
}

module.exports = {
    generateToken,
    verifyToken
}
const ClientErrors = Object.freeze({
    BAD_REQUEST : 401,
    UNAUTHORISED : 401,
    NOT_FOUND : 404
})

const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501
})

const SuccessCodes = Object.freeze({
    OK : 200,
    CREATED : 201
})


module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes
}

// Using '.freeze' we will not able to change the value of objects once made. That's why we use  'object.freeze'. It prevents new properties from being added to it and existing properties cannot be.
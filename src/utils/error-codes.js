const ClientErrors = object.freeze({
    BAD_REQUEST : 401,
    UNAUTHORISED : 401,
    NOT_FOUND : 404
})

const ServerErrors = object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501
})

const SuccessCodes = object.freeze({
    OK : 200,
    CREATED : 201
})


module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes
}
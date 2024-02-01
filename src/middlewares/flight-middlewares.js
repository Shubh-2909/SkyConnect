const {ClientErrors} = require('../utils/error-codes')

const validateCreateFlight = (req,res,next) => {
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        // if any of the body  parameters are missing then we come inside this 'if'.
        return res.status(ClientErrors.BAD_REQUEST).json({
            data:{},
            success: false,
            message : "Invalid request body for create flight",
            err : "Missing mandatory properties to craete a flight"
        });
    }

    next();
}

module.exports={
    validateCreateFlight
}
const {CityService, CityService} = require('../services/index')
// We make the object of CityService class globally so that we can use everywhere it needed without doing for every time in function.
const cityService = new CityService();
 
const create = async (req, res) => {
    // POST request
    // data -> req.body
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success: true,
            message :'Successfully created a city',
            err : {}
        })
    } catch (error) {
        console.log(error); 
        res.status(500).json({
            data : {},
            success: false,
            message :'Not able to create a city',
            err : error
        })
    }
}

const destroy = async (req, res) => {
    // DELETE -> /city/:id
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message :'Successfully deleted a city',
            err : {}
        })
    } catch (error) {
        console.log(error);  
        res.status(500).json({
            data : {},
            success: false,
            message :'Not able to delete a city',
            err : error
        }) 
    }
}

const get = async (req, res) => {
    // GET -> /city/:id
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message :'Successfully fetched a city',
            err : {}
        })
    } catch (error) {
        console.log(error);  
        res.status(500).json({
            data : {},
            success: false,
            message :'Not able to get a city',
            err : error
        }) 
    } 
}

const update = async (req, res) => {
    // PATCH -> /city/:id 
    // Data send -> req.body
    try {
        const response = await cityService.updateCity(req.params.id , req.body);
        return res.status(200).json({
            data : response,
            success: true,
            message :'Successfully fetched a city',
            err : {}
        })
    } catch (error) {
        console.log(error);  
        res.status(500).json({
            data : {},
            success: false,
            message :'Not able to update a city',
            err : error
        })  
    }
}

module.exports = {
    create,
    destroy,
    get,
    update
}
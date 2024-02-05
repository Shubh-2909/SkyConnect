const  {FlightRepository,AirplaneRepository}  = require('../repository/index');
const {compareTime} = require('../utils/helper')

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime ,  data.departureTime)) {
                throw {error :'Arrival time must be earlier than departure time'} 
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });  // in data array ...data , this means we destructure the object and one more key named as totalSeats
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

    async getAllFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }
  
    async updateFlight(flightId , data) {
        try {
            const response = await this.flightRepository.updateFlights(flightId , data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

}

module.exports = FlightService;

/*
  flightnumber,
  airplaneId,
  departureAirportId,
  arrivalAirportId,
  arrivalTime,
  departureTime,
  price
  totalSeats -> from airplane repository
*/
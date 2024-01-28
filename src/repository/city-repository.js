const {City} = require('../models/index');
// All create , destroy are taken from sequelize documentation.
// Trick to remember :-  Database is in different continent . So alaways use async await while doing database maagement.

class CityRepository {
    // {name} like this mean if we get some object and using {name} , this will destructure object then and there only.
    // In JavaScript, object destructuring is a feature that allows you to extract values from objects and bind them to variables using a syntax similar to the object's structure. The curly braces {} are used to perform object destructuring.
    // const person = { name: 'John'};
   // Object destructuring
   // const { name } = person;
   // console.log(name); // Output: John

    async createCity({name}){
        try{
           const city = await City.create({name});
           return city;
        }
        catch(error){
           throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            });
        }
        catch (error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;
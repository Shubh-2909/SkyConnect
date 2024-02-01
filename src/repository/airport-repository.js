const CrudRepository = require('./crud-repository');
const {Airport} = require('../models/index')

class AirplaneRepository extends CrudRepository{
        constructor(){
           super(Airport)
        }
}

/*
 class A{
   print(){
        console.log("wow");
   }
 }
 class B extends A{
   constructor(){
        super();
   }
 }

 const obj = new B();
 obj.print() // wow
*/

module.exports = AirplaneRepository
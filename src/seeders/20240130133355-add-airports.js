'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name : 'Kempegowda International Airport',
        cityId : 4,
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Musuru Airport',
        cityId : 4,
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Mengaluru Airport',
        cityId : 4,
        createdAt :new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Indra gandhi International Airport',
        cityId : 5,
        createdAt :new Date(),
        updatedAt : new Date()
      }
    ] , {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

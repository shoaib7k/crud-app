'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      */
      return queryInterface.bulkInsert('products', [{
        name: 'Milk',
        brand: "Ja"
      },
      {
        name: 'Shoe',
        brand: "Nike"
      },
      {
        name: 'T-Shirt',
        brand: "Fila"
      }
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      */
      return queryInterface.bulkDelete('products', null, {});
    
  }
};

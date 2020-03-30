'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [{
      name: 'Adidas'
    },
    {
      name: 'Nike'
    },
    {
      name: 'Jordan'
    },
    {
      name: "Fila"
    },
    {
      name: "Ja"
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('brands',null,{});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Brand',//name of the target model
      'ProductId',//name of the key we are adding
      {
        type: Sequelize.UUID,
        reference:{ 
        model:  'Product',//source model
        key: 'id',
        },
      onUpdate: 'CASCADE',
      onDelete:  'SET NULL'
      }
    )
    .then(() => {
      //Brand hasMany Product
      return queryInterface.addColumn(
        'Product', // name of Target model
        'BrandId', // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: 'Brand', // name of Source model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Brand', // name of the Target model
      'ProductId' // key we want to remove
    )
    .then(() => {
      // remove Order hasMany Product
      return queryInterface.removeColumn(
        'Product', // name of the Target model
        'BrandId' // key we want to remove
      );
    });
  }
};

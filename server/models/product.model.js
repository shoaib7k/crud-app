module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("Product", {
      name: {
        type: Sequelize.STRING
      },
      brand:{
          type: Sequelize.STRING
      }
    });

   associate: (models)=>{
      Product.hasOne(models.Brand,{ onDelete: 'CASCADE', hooks:true});
    }
   
    return Product;
  };
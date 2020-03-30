module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
      name: {
        type: Sequelize.STRING
      }
    });
    associate: (models)=>{
      Brand.hasMany(models.Product,{ onDelete: 'CASCADE', hooks:true});
    }
    return Brand;
  };
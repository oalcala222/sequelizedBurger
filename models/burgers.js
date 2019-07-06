'use strict';
module.exports = (sequelize, DataTypes) => {
  const burgers = sequelize.define('burgers', 
  {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
    
   {});
  burgers.associate = function(models) {
    // associations can be defined here
  };
  return burgers;
};
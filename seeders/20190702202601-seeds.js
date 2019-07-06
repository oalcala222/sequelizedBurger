'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('burgers', [{
        burger_name: "Double Bacon Cheeseburger",
        devoured: false
      },
      {
        burger_name: "4x4 Animal Style",
        devoured: false
      },
      {  
        burger_name: "Plain Hamburger",
        devoured: true
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('burgers', null, {});
    
  }
};

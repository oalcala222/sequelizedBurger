// Import the model (burger.js) to use its database functions.
var db = require("../models");

module.exports = function(app) {

  // This API route display all burgers using a GET request
  app.get('/', function(req, res) {
    db.burgers.findAll({
    })
    .then(function(dbBurgers) {
      res.render('index', {burgers: dbBurgers}); 
    });
  });

  // This API route adds new burgers to the burgers db and re-renders the root page
  app.post('/', function(req, res) {
    db.burgers.create({
      burger_name: req.body.burger
    })
    .then(function() {
      res.redirect('/');
    });
  });

  // The PUT request route changes the status from true to false (0 to 1)
  app.put('/:id', function(req, res) {
    db.burgers.update({
      devoured: 1
      },
      {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect('/');
    });
  });

  // The delete request route deletes a burger from the database and re-renders the root page
  app.delete('/:id', function(req, res) {
    db.burgers.destroy({
      where: 
      {
        id: req.params.id
      }
    })
    .then(function() {
      res.redirect('/');
    });
  });
};
//routes/fish-routes.js
//Routes for displaying data and saving to the flyfisher db, Fish table

var db = require("../models/fish.js");

// FISH ROUTES
// =============================================================================
module.exports = function(app) {
  // GET route for getting all of fish data
  app.get("/api/fish", function(req, res) {
    // findAll returns all entries for the Fish table when used with no options
    db.Fish.findAll({}).then(function(dbFish) {
      // Access to the fishs as an argument inside of the callback function
      res.json(dbFish);
    });
  });
  // POST route for saving a new fish
  app.post("/api/fish", function(req, res) {
    console.log(req.body);
    // Create takes an argument of an object describing the item to insert to fishs table.
    // Pass in an object with text and complete property (req.body)
    db.Fish.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbFish) {
      // Access created to the new fish as an argument inside of the callback function
      res.json(dbFish);
    });
  });
  // DELETE route for deleting a fish
  app.delete("/api/fish/:id", function(req, res) {
    // Specifies which fish to destroy using "where"
    db.Fish.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFish) {
      res.json(dbFish);
    });
  });
  // PUT route for updating fishs. Grip updated fish  data from req.body
  app.put("/api/fish", function(req, res) {
    // Update takes in an object describing the properties to update; where
    // describes the objects to update
    db.Fish.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbFish) {
      res.json(dbFish);
    });
  });
}
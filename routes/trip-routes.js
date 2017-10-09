//routes/trip-routes.js
//Routes for displaying data and saving to the flyfisher db, Trip table

var db = require("../models/trip.js");
// TRIP ROUTES
// =================================/============================================
module.exports = function(app) {
  // GET route for getting all of trips
  app.get("/api/trip", function(req, res) {
    // findAll returns all entries for the Trip table when used with no options
    db.Trip.findAll({}).then(function(dbTrip) {
      // Access to the trips as an argument inside of the callback function
      res.json(dbTrip);
    });
  });
  // POST route for saving a new trip
  app.post("/api/trip", function(req, res) {
    console.log(req.body);
    // Create takes an argument of an object describing the item to insert to Trips table.
    // Pass in an object with Trip table properties
    db.Trip.create({
      trip_name: req.body.trip_name,
      location: req.body.location
    }).then(function(dbTrip) {
      // Access created to the new trip as an argument inside of the callback function
      res.json(dbTrip);
    });
  });
  // DELETE route for deleting a trip
  app.delete("/api/trip/:id", function(req, res) {
    // Specifies which trip to destroy using "where"
    db.Trip.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrip) {
      res.json(dbTrip);
    });
  });
  // PUT route for updating trips. Grip updated trip  data from req.body
  app.put("/api/trip", function(req, res) {
    // Update takes in an object describing the properties to update; where
    // describes the objects to update
    db.Trip.update({
      trip_name: req.body.trip_name,
      location: req.body.location
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTrip) {
      res.json(dbTrip);
    });
  });
};
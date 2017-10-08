  var path = require("path");
  var db = require("../models")

  module.exports = function(app) {

    app.get("/", function(req, res) {
      res.render("index");
    });

    app.get("/create", function(req, res) {
      res.render("form");
    });

    app.get("/trips", function(req, res) {
      db.Trip.findAll({include: [db.Fish]}).then(data => {
        var hbsObject = {
          trips: data
        };
        console.log(hbsObject);
        res.render("trip", hbsObject);
      });
    });

    app.post("/trips", function(req, res) {
      console.log(req.body);

      db.Trip.create({
      trip_name: req.body.trip_name,
      location: req.body.location,
      date: req.body.date,
      // fish_name: req.body.fish_name,
      // bait: req.body.bait,
      // notes: req.body.notes
    }).then(function(hbsObject) {
      // Access created to the new trip as an argument inside of the callback function
      console.log(hbsObject);
      db.Fish.create({
      TripId: hbsObject.id,
      fish_name: req.body.fish_name,
      bait: req.body.bait,
      notes: req.body.notes
      })
      // res.end();
      // res.render("trip", hbsObject);
      res.redirect("/trips");
      })
    });
    
  }
  var path = require("path");
  var db = require("../models")

  module.exports = function(app) {

    app.get("/create", function(req, res) {
      res.render("form");
    });

    app.post("/trips", function(req, res) {
      db.Trip.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(hbsObject) {
      // Access created to the new trip as an argument inside of the callback function
      res.render("trip", hbsObject);
      })
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
  }
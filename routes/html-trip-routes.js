  var trip = require("../models/trip.js");
  var fish = require("../models/fish.js")
  var path = require("path");

  module.exports = function(app) {
    // app.get("/create", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/main.html"));
    // });

    app.get("/trips", function(req, res) {
      trip.findAll().then ()
    });
  }
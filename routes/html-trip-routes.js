  var db = require("../models");
  var path = require("path");

  module.exports = function(app) {
    app.get("/create", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/main.html"));
    });

    app.get("/trips", function(req, res) {
    db.find(function(data){
      var hbsObject = {
        db: data
      };
      console.log(hbsObject)
      res.render("trip", hbsObject);
      })   
    });
  }
  var db = require("../models");
  var path = require("path");

  module.exports = function(app) {
    app.get("/create", function(req, res) {
      res.sendFile(path.join(__dirname, "../views/layouts/main.html"));
    });
  }
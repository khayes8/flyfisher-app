//server.js is the main entry point to the program.

// get dependencies
var express = require("express");
var bodyParser = require("body-parser");
 
// Set up the Express App
var app = express();

// Sets an initial port. We will use this later in our listener
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing (fish.js, trip.js). 
var db = require("./models");

// Configure  the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes
require("./routes/trip-routes.js")(app);


// Syncing our sequelize models and then starting our express app
//db.sequelize.sync({ force: true }).then(function() {

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



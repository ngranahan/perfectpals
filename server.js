// Require all of the dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up the server using express
var PORT = process.env.PORT || 3000;
var app = express();

// Necessary middleware for bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Let's the server access the routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Runs server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
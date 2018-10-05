const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

var app = express()
var PORT = 3001;
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view
// app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  // test comment for git
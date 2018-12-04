const express = require("express");
// Sup mah dooodez
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// var server = require('http').createServer(app)

var passport = require("passport");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/byte", { useNewUrlParser: true}
);






// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

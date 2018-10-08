const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    //not sure what to fill this in with considering google oauth
  restName: { type: String, required: true }
  

});

const User = mongoose.model("Choice", users);

module.exports = User;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    //not sure what to fill this in with considering google oauth
    userId: { type: String, required: true},
    //Not sure what else this table needs
  

});

const User = mongoose.model("Choice", users);

module.exports = User;
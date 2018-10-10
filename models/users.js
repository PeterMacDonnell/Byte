const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    //not sure what to fill this in with considering google oauth
    userId: { type: String, required: true},
    roomRef: {type: String, required: true},
    name: {type: String, required: true},
    location: {type: String, required: true},
    //Google oauth secret
    token: { type: String, required: null},
    date: { type: Date, default: Date.now }

    //Not sure what else this table needs
  

});

const User = mongoose.model("Choice", users);

module.exports = User;
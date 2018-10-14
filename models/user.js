const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema({
    userId: { type: String, required: true},
    roomRef: {type: String, required: true},
    name: {type: String, required: true},
    location: {type: String, required: true},
    token: { type: String, required: null},
    date: { type: Date, default: Date.now }

});

const User = mongoose.model("User", users);

module.exports = User;
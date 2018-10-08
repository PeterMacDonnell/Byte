const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choices = new Schema({
  restName: { type: String, required: true },
  isChosen: { type: Boolean, required: true }

});

const Choice = mongoose.model("Choice", choices);

module.exports = Choice;
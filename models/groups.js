const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groups = new Schema({
    //pseudocoding this, not sure what to fill schema with
  userId: { type: String, required: true }
  
});

const Group = mongoose.model("Group", groups);

module.exports = Group;
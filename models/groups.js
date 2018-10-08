const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groups = new Schema({
    //pseudocoding this, not sure what to fill schema with
  userId: { type: String, required: true },
  //if someone is in a group from a generated code(ie not a user) will they have a different column on the table? Is that stored at all?
  tempId: { type: String, required: true}
  
});

const Group = mongoose.model("Group", groups);

module.exports = Group;
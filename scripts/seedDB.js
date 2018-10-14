const mongoose = require("mongoose");
mongoose.connect( "mongodb://localhost/byteappDB");
var Choice = require('../models/choices');
var User = require('../models/user')
// Connect to the Mongo DB

Choice.create({restName:"true",isChosen: true})
User.create({userId:"",roomRef:"",name:"",location:"",token:"",date:""})
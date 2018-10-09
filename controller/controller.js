
//added this boilerplate code from another activity, pseudocoded.

const db = require("../models");

// 
module.exports = {
    //Finding a user to do things with?
    findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Throwing users into a group, making said group?
  create: function(req, res) {
    db.Group
      .create(req.body)
      .then(groups => res.json(groups))
      .catch(err => res.status(422).json(err));
  },
  //Adding someone to the group?
  update: function(req, res) {
    db.Group
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Maybe users want to leave a group?
  remove: function(req, res) {
    db.Group
      .findById({ _id: req.params.id })
      .then(groups => groups.remove())
      .then(groups => res.json(groups))
      .catch(err => res.status(422).json(err));
  }
};

//findAll, findById, create, update, remove
const db = require("../models");

module.exports = {
  findAll: function(req, res) {

  },
  findById: function(req, res) {
    db.Choice
    .find(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Choice
    .find(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Choice
    .find(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Choice
    .find(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
};
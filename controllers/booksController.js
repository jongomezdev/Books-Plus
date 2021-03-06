const db = require('../models');

module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbBook) => res.json(dbBook))
      .catch((err) => res.status(422).json(err));
  },
};

const { User, Thought } = require('../models');
const { ObjectId } = require('mongoose').Types;

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    User.findById({ _id: req.params.userId })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
    .then(() => {res.json("User was deleted.")})
        .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    )
    .then(() => {res.json("updated user")})
    .catch((err) => res.status(500).json(err));
  },
};
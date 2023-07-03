const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const {
      body: { email, name},
    } = req;
    const user = await User.create({ email, name });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


const getUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };
  
const updateUser = async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const user = await User.findByIdAndUpdate(id, body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};

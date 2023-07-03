const express = require("express");
///import the Control Functions
const {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/users");
///Create the Router
const userRouter = express.Router();
///CRUD Operations
userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;

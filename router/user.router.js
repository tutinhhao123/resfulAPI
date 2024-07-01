const express = require("express");
const User = require("../model/user.module.js");
const router = express.Router();

const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller.js');

//get 
router.get('/', getUsers);
//get by id
router.get("/:id", getUser);
//post a User
router.post("/", createUser);
// update a User
router.put("/:id", updateUser);
// delete a User
router.delete("/:id", deleteUser);

module.exports = router;

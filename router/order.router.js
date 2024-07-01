const express = require("express");
const Order = require("../model/order.module.js");
const router = express.Router();

const {getOrders, getOrder, createOrder, updateOrder, deleteOrder} = require('../controllers/order.controller.js');

//get 
router.get('/', getOrders);
//get by id
router.get("/:id", getOrder);
//post a Order
router.post("/", createOrder);
// update a Order
router.put("/:id", updateOrder);
// delete a Order
router.delete("/:id", deleteOrder);

module.exports = router;

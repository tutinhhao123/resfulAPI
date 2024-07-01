const express = require("express");
const Product = require("../model/product.module.js");
const router = express.Router();

const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

//get 
router.get('/', getProducts);
//get by id
router.get("/:id", getProduct);
//post a product
router.post("/", createProduct);
// update a product
router.put("/:id", updateProduct);
// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;

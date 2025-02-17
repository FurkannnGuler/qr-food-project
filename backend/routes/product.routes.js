
const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

router.get('/product/:serialNumber', productController.getProductBySerialNumber);

module.exports = router;
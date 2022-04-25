const express = require('express');
const router = express.Router();

const {cart, detail } = require('../controllers/productController')

/* /users */
router.get('/product-cart', cart);
router.get('/product-detail', detail)

module.exports = router;

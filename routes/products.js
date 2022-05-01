const express = require('express');
const router = express.Router();

const {cart, detail } = require('../controllers/productController')

/* /users */
router.get('/cart', cart);
router.get('/detail', detail)

module.exports = router;

const express = require('express');
const router = express.Router();

//const controlador = require('../controllers/productController')
const {cart, detail, getByCategory, search, add, store, edit, update, remove } = require('../controllers/productController')

/* /products */
router
    .get('/add', add)
    .post('/store', store)
    .get('/edit/:id', edit)
    .put('/update/:id', update)
    .get('/cart', cart)
    .get('/detail/:idProduct', detail)
    .get('/category/:name/:idProduct?', getByCategory) 
    //.get('/category/:idCategory/:idByCategory', getByCategory)
    .get('/search', search)
    .get('/remove/:id', remove)

module.exports = router;

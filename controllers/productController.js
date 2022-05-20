const fs = require('fs');
const path = require('path');

module.exports = {
    add : (req, res) => {
        return res.render('productAdd', {
            categories
        })
    },
    store : (req, res) => {
        const {name,price,category} = req.body;

        let lastID = products[product.lenght - 1];

        let newProduct = {
            id: +lastID + 1,
            name: name.trim(),
            price: +price,
            category: +category,
            img: "img-phone-01.jpg"
        }
        
        products.push(newProduct);

        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), JSON.stringify(products, null, 3), 'utf-8');


        return res.redirect('/')
    },
    edit : (req, res) => {
        
        const {id} = req.params;
        const product = product.find(product => product.id === +id);
        
        return res.render('productEdit', {
            categories,
            product
        })
    },
    update : (req, res) => {

        const {id} = req.params;
        const {name, price, category} = req.body;

        const productsModify = products.map(product => {
            if(product.id === +id) {
                let productModify = {
                    ...product,

                    /* 
                    id :2
                    name : 'nombre',
                    price : 234,
                    category : 1,
                    img : 'nombre de Imagen'
                     */
                    name,
                    price : +price,
                    category : +category
                }
                return productModify
            }

        })
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), JSON.stringify(products, null, 3), 'utf-8');

        return res.redirect('/')
        /* return res.render(req.body) */
    
    },
    detail : (req, res) => {

        const {idProduct} = req.params;
        const product = product.find(product => product.id === +idProduct);

        return res.render('productDetail', {
            product
        })
    },
    cart : (req, res) => res.render('productCart'),
    getByCategories : (req, res) => {
        return res.send(req.params)
    },
    remove : (req, res) => {
        const {id} = req.params;

        const productFilter = products.filter(product => products.id !== +id);
        
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), JSON.stringify(products, null, 3), 'utf-8');

        return res.redirect('/')
    }


}
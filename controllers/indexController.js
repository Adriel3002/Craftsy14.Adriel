const fs = require('fs');
const path = require('path')
const tutorials = require('')

module.exports = {
    index : (req, res) => {

        const products = fs.readFileSync(products_db)

        const celulares = product.filter(product => product. category === 1)
        const tablets = product.filter(product => product. category === 2)
        const computadoras = product.filter(product => product. category === 3)

        res.render('index', { title: 'Express' })
    }
}
const products = require("../data/products");

module.exports = {
    register : (req, res) => {
        
        return res.render('register')

    },
    processRegister : (req, res) => {
        
        let errors = validationResult(req);

        let {nombre, apellido, email, password} = req.body;

        if (errors.isEmpty()) {
            let {nombre, apellido, email, password} =req.body;
            let lastID = products[products.length - 1].id;
            let nuevoUsuario = {
                id : +lastID + 1,
                name : nombre.trim(),
                apellido : apellido.trim(),
                email,
                password,
            };

            usuarios.push(nuevoUsuario);

            fs.writeFileSync(
                path.resolve(__dirname, "..", "data", "user.json")
            )
        }

        return res.render('processRegister')
    },
    login : (req, res) => {
        
        return res.render('login')

    }
    
}
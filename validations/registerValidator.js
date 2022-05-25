const {check, body} = require('check', 'body')


module.exports = [

    check('nombre')
        .isLength({min: 2}).withMessage('Como minimo dos letras').bail()
        .isAlpha().withMessage('Solo letras Porfa!'),

    check('apellido')
        .isLength({min: 2}).withMessage('Como minimo dos letras').bail()
        .isAlpha().withMessage('Solo letras Porfa!'),

    check('email')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email no valido'),

    check('password')
        .isLength({min: 6, max: 12}).withMessage('La Contraseña debe tener entre 6 y 12 caracteres'),

    body('password2')
        .custom((value,{req}) => {
            if (value !== req.body.password) {
                return false
            }
            return true
        }).withMessage('Las contraseñas no Coinciden!'),

]


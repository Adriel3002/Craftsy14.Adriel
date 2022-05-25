const express = require('express');
const router = express.Router();

const {register, login, registerValidator, processValidator} = require('../controllers/userController')
const registerValidatror = require('../validations/registerValidator')

/* /users */
router.get('/register', register)
      .post('/register', registerValidator, processValidator)
      .get('/login', login);

module.exports = router;

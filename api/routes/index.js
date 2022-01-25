const express = require('express');
const login = require('./loginController')

const router = express.Router();

router.use('/login',login)

module.exports = router;
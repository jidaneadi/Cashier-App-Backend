const express = require('express');
const router = express.Router();
const login = require('../controller/logincontroller')

/* GET home page. */
router.post('/', login.Login)

module.exports = router;

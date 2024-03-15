const express = require('express')
const router = express.Router()
const tokenController = require('../controller/token')

router.post('/',tokenController.requestToken)

module.exports = router
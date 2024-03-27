const express = require('express')
const router = express.Router()
const productcontrollers = require('../controller/productcontroller')

router.post('/', productcontrollers.createBarang)
router.put('/:id', productcontrollers.UpdateBarang)
router.get('/', productcontrollers.showBarang)
router.get('/:id', productcontrollers.showById)
router.delete('/:id', productcontrollers.deleteBarang)

module.exports = router
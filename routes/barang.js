const express = require('express')
const router = express.Router()
const barangcontrollers = require('../controller/barangcontroller')

router.post('/', barangcontrollers.createBarang)
router.put('/:id', barangcontrollers.UpdateBarang)
router.get('/', barangcontrollers.showBarang)
router.delete('/:id', barangcontrollers.deleteBarang)

module.exports = router
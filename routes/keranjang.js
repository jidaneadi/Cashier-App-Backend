const express = require('express')
const router = express.Router()
const keranjangcontroller = require('../controller/keranjangcontroller')

router.post('/', keranjangcontroller.createKeranjang)
router.put('/:id', keranjangcontroller.updateKeranjang)
router.delete('/:id', keranjangcontroller.deleteKeranjang)

module.exports = router
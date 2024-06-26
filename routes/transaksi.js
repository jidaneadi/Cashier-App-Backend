const express = require('express')
const router = express.Router()
const transaksiController = require('../controller/transaksicontroller')

router.post("/", transaksiController.createTransaksi)
router.put("/:id", transaksiController.updateTransaksi)
router.delete("/:id", transaksiController.deleteTransaksi)
router.get('/', transaksiController.showAll)

module.exports = router
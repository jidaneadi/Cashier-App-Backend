const express = require('express');
const router = express.Router();
const pelangganControlller = require('../controller/pelanggancontroller')

/* GET users listing. */
router.post('/', pelangganControlller.createdPelanggan)
router.get('/', pelangganControlller.showPelanggan)
router.put('/:id', pelangganControlller.updatePelanggan)
router.delete('/:id', pelangganControlller.deletePelanggan)

module.exports = router;

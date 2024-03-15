const express = require('express')
const router = express.Router()
const karyawanController = require('../controller/karyawancontroller')
const verifyToken = require("../middleware/auth/verifyToken")

router.post('/', karyawanController.createKaryawan)
router.get('/:id', karyawanController.showById)
router.get('/', karyawanController.showKaryawan)
router.put('/:id', karyawanController.updateKaryawan)
router.delete('/:id', karyawanController.deleteKaryawan)

module.exports = router
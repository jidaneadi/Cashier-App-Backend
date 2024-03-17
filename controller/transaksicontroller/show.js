const { QueryTypes } = require("sequelize")
const { sequelize, Transaksi } = require("../../models")

module.exports = async(req, res) => {
    const dataTransaksi = await sequelize.query('SELECT transaksi.id, transaksi.nama_pelanggan, transaksi.tot_harga, transaksi.pembayaran, transaksi.layanan, transaksi.updatedAt, karyawan.nama FROM transaksi LEFT JOIN karyawan ON transaksi.id_karyawan = karyawan.id',
    {
        type: QueryTypes.SELECT
      })

    if(dataTransaksi === " "){
        return res.status(404).json({msg : "Data transaksi kosong!"})
    }

    return res.status(200).json(dataTransaksi)
}
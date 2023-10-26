const { QueryTypes } = require("sequelize")
const { sequelize } = require("../../models")

module.exports = async(req, res) => {
    const id = req.params.id

    const data = await sequelize.query('SELECT pelanggan.nama, barang.nama_barang, barang.harga,keranjang.jumlah, barang.tgl_kadaluwarsa, transaksi.tot_harga FROM keranjang LEFT JOIN transaksi ON keranjang.id_transaksi = transaksi.id LEFT JOIN pelanggan ON transaksi.id_pelanggan = pelanggan.id LEFT JOIN barang ON barang.id = keranjang.id_barang WHERE keranjang.id_transaksi = ?',
    {
        replacements: [id],
        type: QueryTypes.SELECT
      })
    if (data === ""){
        return res.status(400).json({msg : "Data kosong"})
    }

    return res.status(200).json({
        msg : "Sukses lihat data transaksi",
        data : data
    })
}
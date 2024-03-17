const { QueryTypes } = require("sequelize")
const { sequelize, Transaksi } = require("../../models")

module.exports = async(req, res) => {
    const id = req.params.id

    const cekProduk = await Transaksi.findOne({
        where : {id : id}
    })

    if(!cekProduk){
        return res.status(404).json({msg : "Data tidak ditemukan!"})
    }
    const dataTransaksi = await sequelize.query('SELECT transaksi.id_karyawan, transaksi.nama_pelanggan, transaksi.tot_harga, transaksi.pembayaran, transaksi.layanan, transaksi.updatedAt, karyawan.nama FROM transaksi LEFT JOIN karyawan ON transaksi.id_karyawan = karyawan.id WHERE transaksi.id = ?',
    {
        replacements: [id],
        type: QueryTypes.SELECT
      })

      const dataKeranjang = await sequelize.query('SELECT keranjang.id_transaksi, keranjang.id_barang, keranjang.jumlah, produk.nama_produk, produk.harga FROM keranjang LEFT JOIN produk ON keranjang.id_barang = produk.id WHERE keranjang.id_transaksi = ?',
    {
        replacements: [id],
        type: QueryTypes.SELECT
      })

    return res.status(200).json({
        msg : "Sukses lihat data transaksi",
        transaksi : dataTransaksi,
        keranjang : dataKeranjang
    })
}
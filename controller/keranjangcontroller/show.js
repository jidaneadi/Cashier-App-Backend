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

      const dataKeranjang = await sequelize.query('SELECT keranjang.id, keranjang.jumlah, produk.nama_produk, produk.harga FROM keranjang LEFT JOIN produk ON keranjang.id_barang = produk.id WHERE keranjang.id_transaksi = ?',
    {
        replacements: [id],
        type: QueryTypes.SELECT
      })

    return res.status(200).json(dataKeranjang)
}
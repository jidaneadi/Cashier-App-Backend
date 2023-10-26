const { Barang } = require('../../models')

module.exports = async(req, res) => {
    
    const dataBarang = await Barang.findAll({
        attributes: ['id', 'nama_barang', 'harga', 'stok', 'tgl_kadaluwarsa', 'keterangan', 'createdAt', 'updatedAt']
    });

    return  res.status(200).json(dataBarang)
}
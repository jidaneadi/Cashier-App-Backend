const { Product } = require('../../models')

module.exports = async(req, res) => {
    
    const dataProduct = await Product.findAll({
        attributes: ['id', 'nama_produk', 'harga', 'jns_produk', 'keterangan', 'createdAt', 'updatedAt']
    });

    return  res.status(200).json(dataProduct)
}
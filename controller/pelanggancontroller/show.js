const { Pelanggan } = require('../../models')

module.exports = async(req, res) => {
    
    const dataPelanggan = await Pelanggan.findAll({
        attributes: ['id', 'nama', 'no_hp', 'alamat', 'createdAt', 'updatedAt']
    });

    return  res.status(200).json(dataPelanggan)
}
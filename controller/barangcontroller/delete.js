const {Barang} = require('../../models')

module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Barang.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Barang tidak ditemukan"})
    }else{
        await cekId.destroy()
    }

    return res.status(200).json({msg : "Data barang berhasil dihapus"})
}
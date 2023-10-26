const {Pelanggan} = require('../../models')
module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Pelanggan.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Pelanggan tidak ditemukan"})
    }else{
        await cekId.destroy()
    }

    return res.status(200).json({msg : "Data pelanggan berhasil dihapus"})
}
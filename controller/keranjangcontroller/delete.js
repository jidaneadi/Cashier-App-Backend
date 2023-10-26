const {Keranjang} = require('../../models')
module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Keranjang.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Keranjang tidak ditemukan"})
    }else{
        await cekId.destroy()
    }

    return res.status(200).json({msg : "Data keranjang berhasil dihapus"})
}
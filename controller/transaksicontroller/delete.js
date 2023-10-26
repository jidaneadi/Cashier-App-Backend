const {Transaksi} = require('../../models')
module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Transaksi.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Transaksi tidak ditemukan"})
    }else{
        await cekId.destroy()
    }

    return res.status(200).json({msg : "Data transaksi berhasil dihapus"})
}
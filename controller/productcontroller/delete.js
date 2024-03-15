const {Product} = require('../../models')

module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Product.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Produk tidak ditemukan"})
    }else{
        await cekId.destroy()
    }
    return res.status(200).json({msg : "Data produk berhasil dihapus"})
}
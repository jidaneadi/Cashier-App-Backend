const {User} = require('../../models')

module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await User.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Karyawan tidak ditemukan"})
    }else{
        await cekId.destroy()
    }
    return res.status(200).json({msg : "Data karyawan berhasil dihapus"})
}
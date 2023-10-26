const {Pelanggan} = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Pelanggan.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Pelanggan tidak ditemukan"})
    }

    const schema = {
        nama : "string |empty:false",
        no_hp : "string |empty:false",
        alamat : "string|empty:false",
    }

    const validation = v.validate(req.body, schema)

    if(validation.length){
        return res.status(400).json({
            msg : validation
        })
    }

    const cek = await Pelanggan.findOne({where:{no_hp : req.body.no_hp}})

    if(cek){
        return res.status(400).json({msg : "Nomor hp sudah digunakan"})
    }

    const data = {
        nama: req.body.nama,
        no_hp: req.body.no_hp,
        alamat: req.body.alamat
    }

    await cekId.update(data);

    return res.status(200).json({msg : "Data pelanggan berhasil diupdate"})
}
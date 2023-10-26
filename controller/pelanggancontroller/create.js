const { Pelanggan } = require('../../models')
const Validator = require('fastest-validator');
const v = new Validator()

module.exports = async (req, res) => {
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

    const createdPelanggan = await Pelanggan.create(data)

    return  res.status(200).json({
        msg : "Create data pelanggan berhasil"
    });
    
}
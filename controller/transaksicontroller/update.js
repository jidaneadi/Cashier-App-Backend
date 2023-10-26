const {Transaksi} = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Transaksi.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Transaksi tidak ditemukan"})
    }

    const schema = {
        id_pelanggan : "string | empty=true",
        tot_harga : "string | empty=true"
    }

    const validation = v.validate(req.body, schema)

    if(validation.length){
        return res.status(400).json({
            msg : validation
        })
    }

    const data = {
        id_pelanggan : req.body.id_pelanggan,
        tot_harga : req.body.tot_harga
    }

    await cekId.update(data);

    return res.status(200).json({msg : "Data transaksi berhasil diupdate"})
}
const {Keranjang} = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator

module.exports = async(req, res) => {
    id = req.params.id

    const cekId = await Keranjang.findByPk(id)
    if(!cekId){
        return res.status(404).json({msg : "Keranjang tidak ditemukan"})
    }

    const schema = {
        id_barang : "string | empty=false",
        id_transaksi : "string | empty=false",
        jumlah : "string | empty=true",
    }

    const validation = v.validate(req.body, schema)

    if(validation.length){
        return res.status(400).json({
            msg : validation
        })
    }

    const data = {
        id_barang : req.body.id_barang,
        id_transaksi : req.body.id_transaksi,
    }

    await cekId.update(data);

    return res.status(200).json({msg : "Data keranjang berhasil diupdate"})
}
const { Transaksi } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async(req, res) => {
    const schema = {
        id_pelanggan : "string | empty=true",
        tot_harga : "string | empty=true"
    }

    const validation = v.validate(req.body, schema)
    if(validation.length){
        return res.status(400).json({msg:validation})
    }

    const data = {
        id_pelanggan : req.body.id_pelanggan,
        tot_harga : req.body.tot_harga
    }

    await Transaksi.create(data)

    return res.status(200).json({msg : "Transaksi berhasil"})
}
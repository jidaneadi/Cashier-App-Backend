const { Keranjang } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async(req, res) => {
    const schema = {
        id_barang : "string | empty=false",
        id_transaksi : "string | empty=false",
        jumlah : "string | empty=true",
    }

    const validation = v.validate(req.body, schema)
    if(validation.length){
        return res.status(400).json({ msg : validation })
    }
    const data = {
        id_barang : req.body.id_barang,
        id_transaksi : req.body.id_transaksi,
    }

    await Keranjang.create(data)
    
    return res.status(200).json({msg : "Sukses input barang"})
}
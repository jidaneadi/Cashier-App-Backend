const { Barang } = require('../../models')
const Validator = require('fastest-validator')
const v = new Validator()


module.exports = async(req, res) => {
    const schema = {
        nama_barang : "string | empty=false",
        stok : "string | empty=false",
        harga : "string | empty=false",
        tgl_kadaluwarsa : "string | empty=false",
        keterangan : "string",
    }

    const validation = v.validate(req.body, schema)
    if(validation.length){
        return res.status(400).json({msg : validation})
    }

    const data ={
        nama_barang : req.body.nama_barang,
        stok : req.body.stok,
        harga : req.body.harga,
        tgl_kadaluwarsa : req.body.tgl_kadaluwarsa,
        keterangan : req.body.keterangan,
    }

    await Barang.create(data)

    return res.status(200).json({msg : "Sukses tambah barang"})
}
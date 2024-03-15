const { Product } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  id = req.params.id;

  const cekId = await Product.findByPk(id);
  if (!cekId) {
    return res.status(404).json({ msg: "Data Product tidak ditemukan" });
  }

  const schema = {
    nama_produk: "string | empty=false",
    harga: "string | empty=false",
    jns_produk: "string | empty=false",
    keterangan: "string | empty=true",
  };

  if (req.body.nama_produk === "") {
    return res.status(400).json({ msg: "Nama produk tidak boleh kosong!" });
  }

  if (req.body.harga === "") {
    return res.status(400).json({ msg: "Harga produk tidak boleh kosong!" });
  }

  if (req.body.jns_produk === "") {
    return res.status(400).json({ msg: "Jenis produk tidak boleh kosong!" });
  }

  const validation = v.validate(req.body, schema);
  if (validation.length) {
    return res.status(400).json(validation);
  }

  const namaProduct = req.body.nama_produk;
  if (namaProduct) {
    const cekNama = await Product.findOne({
      where: { nama_produk: namaProduct },
    });

    if (cekNama && namaProduct !== cekId.nama_produk) {
      return res.status(400).json({
        message: "Nama Product sudah digunakan",
      });
    }
  }

  const data = {
    nama_produk: req.body.nama_produk,
    harga: req.body.harga,
    jns_produk: req.body.jns_produk,
    keterangan: req.body.keterangan,
  };

  await cekId.update(data);

  return res.status(200).json({ msg: "Sukses update data barang" });
};

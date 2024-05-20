const { Transaksi, Keranjang } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    keranjang: {
      type: "array",
      items: {
        type: "object",
        props: {
          id_barang: { type: "string", empty: false },
          jumlah: { type: "string", empty: false },
        },
      },
    },
    id_karyawan: { type: "string", empty: false },
    nama_pelanggan: { type: "string", empty: false },
    tot_harga: { type: "string", empty: false },
    layanan: { type: "string", empty: false },
    pembayaran: { type: "string", empty: false },
  };

  const validation = v.validate(req.body, schema);
  if (validation.length) {
    return res.status(400).json({ msg: validation });
  }

  //Mengecek jumlah data yang ada di variabel keranjang, apakah kosong atau tidak
  if (!req.body.keranjang || req.body.keranjang.length === 0) {
    res.status(400).send({ msg: "Keranjang belanja tidak boleh kosong!!!" });
  }

  //Menampung data untuk tabel Transaksi
  const dataTransaksi = {
    id_karyawan: req.body.id_karyawan,
    nama_pelanggan: req.body.nama_pelanggan,
    tot_harga: req.body.tot_harga,
    layanan: req.body.layanan,
    pembayaran: req.body.pembayaran,
  };

  const createTransaksi = await Transaksi.create(dataTransaksi);

  const dataKeranjang = {
    id_barang: createTransaksi.id,
    id_transaksi: req.body.id_transaksi,
    jumlah: req.body.jumlah,
  };

  const createKeranjang = await Keranjang.create(dataTransaksi);

  return res.status(200).json({ msg: "Transaksi berhasil" });
};

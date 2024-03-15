const { QueryTypes } = require("sequelize");
const { sequelize } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const dataKaryawan = await sequelize.query(
    "SELECT user.id, user.email, user.password, user.role, karyawan.id_user, karyawan.nama, karyawan.no_hp, karyawan.alamat, karyawan.status FROM user LEFT JOIN karyawan ON user.id = karyawan.id_user WHERE user.id=?",
    {
      replacements: [id],
      type: QueryTypes.SELECT,
    }
  );
  if (dataKaryawan === "") {
    return res.status(400).json({ msg: "Data kosong" });
  }

  return res.status(200).json({
    msg: "Sukses lihat data transaksi",
    data: dataKaryawan,
  });
};

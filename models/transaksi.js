module.exports = (sequelize, DataTypes) => {
  const Transaksi = sequelize.define(
    "Transaksi",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_karyawan: {
        type: DataTypes.INTEGER,
      },
      nama_pelanggan: {
        type: DataTypes.INTEGER,
      },
      tot_harga: {
        type: DataTypes.STRING,
      },
      pembayaran: {
        type: DataTypes.ENUM,
        values: ["cash", "qris"],
        defaultValue: "cash",
        allowNull: false,
      },
      layanan: {
        type: DataTypes.ENUM,
        values: ["takeway", "makan di tempat"],
        defaultValue: "makan di tempat",
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "transaksi",
    }
  );

  return Transaksi;
};

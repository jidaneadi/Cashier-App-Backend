module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama_produk: {
        type: DataTypes.STRING,
        unique: true,
      },
      harga: {
        type: DataTypes.INTEGER,
      },
      jns_produk: {
        type: DataTypes.ENUM,
        values: [
          "paket cripy",
          "paket penyetan",
          "saus spesial",
          "mie pedas",
          "menu satuan",
          "menu sayur",
          "minuman varian rasa",
          "menu lain-lain",
          "minuman",
        ],
        defaultValue: "menu satuan",
        allowNull: false,
      },
      keterangan: {
        type: DataTypes.STRING,
        allowNull:true,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "produk",
    }
  );

  return Product;
};

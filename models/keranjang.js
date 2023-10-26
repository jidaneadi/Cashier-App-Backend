module.exports= (sequelize, DataTypes) => {
    const Keranjang = sequelize.define("Keranjang", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_barang :{
            type : DataTypes.INTEGER,
        },
        id_transaksi : {
            type : DataTypes.INTEGER,
        },
        jumlah : {
            type : DataTypes.DATE,
        },
        createdAt : {
            type : DataTypes.DATE,
        },
        updatedAt : {
            type : DataTypes.DATE,
        },
    },
    {
        tableName : "keranjang"
    })

    return Keranjang;
}
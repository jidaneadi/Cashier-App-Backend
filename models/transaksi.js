module.exports = (sequelize, DataTypes) => {
    const Transaksi = sequelize.define("Transaksi", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_pelanggan :{
            type : DataTypes.INTEGER,
        },
        tot_harga : {
            type : DataTypes.STRING,
        },
        createdAt : {
            type : DataTypes.DATE,
        },
        updatedAt : {
            type : DataTypes.DATE,
    },
    },
    {
        tableName : "transaksi"
    })

    return Transaksi;
}
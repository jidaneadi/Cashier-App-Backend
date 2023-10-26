module.exports = (sequelize, DataTypes) => {
    const Barang = sequelize.define("Barang", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_barang :{
            type : DataTypes.STRING,
        },
        stok : {
            type : DataTypes.INTEGER,
        },
        harga : {
            type : DataTypes.INTEGER,
        },
        tgl_kadaluwarsa : {
            type : DataTypes.DATEONLY,
        },
        keterangan : {
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
        tableName : "barang"
    })

    return Barang

}
module.exports = (sequelize, DataTypes) => {
    const Pelanggan = sequelize.define("Pelanggan", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama :{
            type : DataTypes.STRING,
        },
        no_hp : {
            type : DataTypes.STRING,
        },
        alamat : {
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
        tableName : "pelanggan"
    })

    return Pelanggan;
}
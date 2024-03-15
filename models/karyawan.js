module.exports = (sequelize, DataTypes) => {
    const Karyawan = sequelize.define("Karyawan", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user:{
            type: DataTypes.INTEGER,
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
        status : {
            type : DataTypes.ENUM,
            values: [
                'admin',
                'karyawan'
            ],
            defaultValue:'karyawan'
        },
        createdAt : {
            type : DataTypes.DATE,
        },
        updatedAt : {
            type : DataTypes.DATE,
    },
    },
    {
        tableName : "Karyawan"
    })

    return Karyawan;
}
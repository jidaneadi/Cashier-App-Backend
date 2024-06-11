module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email :{
            type : DataTypes.STRING,
        },
        password : {
            type : DataTypes.STRING,
        },
        role : {
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
        tableName : "user"
    })

    return User;
}
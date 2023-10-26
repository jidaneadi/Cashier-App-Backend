module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define("Login", {
        id :{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama :{
            type : DataTypes.STRING,
        },
        email : {
            type : DataTypes.STRING,
        },
        password : {
            type : DataTypes.STRING,
        },
        konf_pass : {
            type : DataTypes.STRING,
        },
    },
    {
        tableName : "login"
    })

    return Login;
}
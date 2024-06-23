// models/Product.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DataBase');
const { token } = require('morgan');

const Login = sequelize.define('Login', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Login;

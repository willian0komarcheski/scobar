// models/Product.js

const { DataTypes } = require('sequelize');
const sequelize = require('../Config/DataBase');

const Produto = sequelize.define('Produto', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

module.exports = Produto;

const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Console = db.define('console', {
    codConsole: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    serie:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    codCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cliente',
            key: 'codCliente'
        }
    }
}, {
    timestamps: false,
    tableName: 'consoles'
})

module.exports = Console
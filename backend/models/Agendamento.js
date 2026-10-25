const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Agendamento = db.define('agendamento', {
    codAgendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('revisão', 'manutenção', 'instalação'),
    },
    idVeiculo: { // Ajustado para idVeiculo
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'veiculos', // Corrigido para o plural
            key: 'codVeiculo'
        }
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente' // Corrigido de codCiclista para codCliente
        }
    }
}, {
    timestamps: false,
    tableName: 'agendamentos'
})

module.exports = Agendamento
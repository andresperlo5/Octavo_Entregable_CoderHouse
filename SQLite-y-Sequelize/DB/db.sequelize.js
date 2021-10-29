const { Sequelize } = require('sequelize')
const productsModel = require('../models/products')

const sequelize = new Sequelize('Vsf0WUctzo', 'Vsf0WUctzo', 'XZtaJTypn0', {
    host: 'remotemysql.com', //poner la url de mysql online
    dialect: 'mysql'
});

sequelize.sync({ force: false }).then(() => {
    console.log('Conectado a la Base de Datos!');
}).catch((err) => {
    console.log('Error en la Conexion', err)
})

const user = productsModel(sequelize, Sequelize)

module.exports = user
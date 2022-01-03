const { Sequelize } = require('sequelize');
const { DBNAME, USER, PASSWORD, HOST } = process.env;

const db = new Sequelize(DBNAME, USER, PASSWORD, {
    dialect: 'mysql',
    host: HOST
})

module.exports = db;
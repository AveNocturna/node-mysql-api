const { DataTypes } = require('sequelize');
const db = require('../db/db');
const NotesModel = db.define('note', {
    title: {
        type: DataTypes.STRING(25),
        unique: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ''
    }
});

module.exports = NotesModel;
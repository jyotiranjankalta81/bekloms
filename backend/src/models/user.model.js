const tbl = require('./TableName')
const Sequelize = require('sequelize');
const sequelize = require('../db/db-connection')


const Users = sequelize.define(tbl.TBL_USER, {
    USER_ID: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    EMAIL: {
        type: Sequelize.STRING(100),
        trim: true,
    },
    PASSWORD: {
        type: Sequelize.STRING(100),
        trim: true,
    },
    ISDELETED: {
        type: Sequelize.BOOLEAN(),
        trim: true,
    },
})

module.exports = Users;

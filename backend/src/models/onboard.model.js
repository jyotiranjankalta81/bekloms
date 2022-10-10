const tbl = require('./TableName')
const Sequelize = require('sequelize');
const sequelize = require('../db/db-connection')


const onboard = sequelize.define(tbl.TBL_ONBOARD, {
    USER_ID: {
        type: Sequelize.INTEGER(50),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    NAME: {
        type: Sequelize.STRING(100),
        trim: true,
    },
    EMAIL: {
        type: Sequelize.STRING(100),
        trim: true,
    },
    PHONENO: {
        type: Sequelize.NUMBER(13),
        trim: true,
    },
    ABOUT: {
        type: Sequelize.STRING(1000),
        trim: true,
    },
    FILE: {
        type: Sequelize.STRING(100),
        trim: true,
    },
    ISDELETED: {
        type: Sequelize.BOOLEAN(),
        trim: true,
    },
})

module.exports = onboard;

const tbl = require('./TableName')
const Sequelize = require('sequelize');
const sequelize = require('../db/db-connection')


const onboard = sequelize.define(tbl.TBL_GETSTARTED, {
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
    ISDELETED: {
        type: Sequelize.BOOLEAN(),
        trim: true,
    },
})

module.exports = onboard;

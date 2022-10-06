const tbl = require('./TableName')
const  Sequelize = require('sequelize');
const sequelize = require('../db/db-connection')


const LatestUpdateModel = sequelize.define(tbl.TBL_LATESTUPDATE, {
        LU_ID: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        }, 
        LU_TITLE: {
            type: Sequelize.STRING(100),     
            trim: true,
        }, 
        LU_TEXT: {
            type: Sequelize.TEXT(),     
            trim: true,
        },          
        LU_IMAGE: {
            type: Sequelize.TEXT(),     
            trim: true,
        },           
        LU_GALLARY: {
            type: Sequelize.TEXT(),     
            trim: true,
        },  
        ISDELETED: {
            type: Sequelize.BOOLEAN(),         
            trim: true,
        },       
    })

module.exports = LatestUpdateModel;
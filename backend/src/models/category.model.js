const tbl = require('./TableName')
const  Sequelize = require('sequelize');
const sequelize = require('../db/db-connection')


const CategoryModel = sequelize.define(tbl.TBL_CATEGORY, {
        CATEGORY_ID: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement:true,
            allowNull:false,
        }, 
        CATEGORY_NAME: {
            type: Sequelize.STRING(100),     
            trim: true,
        },  
        ISDELETED: {
            type: Sequelize.BOOLEAN(),         
            trim: true,
        },       
    })

module.exports = CategoryModel;
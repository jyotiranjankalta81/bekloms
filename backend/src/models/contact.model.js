const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const CareerModel = sequelize.define(tbl.TBl_CONTACT, {
  CONTACT_ID: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  CONTACT_NAME: {
    type: Sequelize.STRING(100),
    trim: true,
  },
  CONTACT_EMAIL: {
    type: Sequelize.STRING(100),
    trim: true,
  },
  CONTACT_MESSAGE: {
    type: Sequelize.TEXT(),
    trim: true,
  },
  ISDELETED: {
    type: Sequelize.BOOLEAN(),
    trim: true,
  },
});

module.exports = CareerModel;

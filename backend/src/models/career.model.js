const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const CareerModel = sequelize.define(tbl.TBL_CAREER, {
  CAREER_ID: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  CAREER_PERSON_EMAIL: {
    type: Sequelize.STRING(100),
    trim: true,
  },
  CAREER_PERSON_RESUME: {
    type: Sequelize.STRING(100),
    trim: true,
  },
  ISDELETED: {
    type: Sequelize.BOOLEAN(),
    trim: true,
  },
});

module.exports = CareerModel;

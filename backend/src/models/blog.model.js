const tbl = require("./TableName");
const Sequelize = require("sequelize");
const sequelize = require("../db/db-connection");

const BlogModel = sequelize.define(tbl.TBL_BLOG, {
  BLOG_ID: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  BLOG_NAME: {
    type: Sequelize.STRING(100),
    trim: true,
  },
  BLOG_CATEGORY: {
    type: Sequelize.STRING(50),
    trim: true,
  },
  BLOG_CONTANT: {
    type: Sequelize.TEXT(),
    trim: true,
  },
  BLOG_IMAGE: {
    type: Sequelize.TEXT(),
    trim: true,
  },
  ISDELETED: {
    type: Sequelize.BOOLEAN(),
    trim: true,
  },
});

module.exports = BlogModel;

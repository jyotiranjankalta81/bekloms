const logger = require('../config/logger');
const sequelize = require('../db/db-connection');
module.exports.userModel = require('./user.model');
module.exports.onBoard = require('./onboard.model.js');
module.exports.getStarted = require('./getstarted.model.js');
module.exports.BlogModel = require('./blog.model');
module.exports.CategoryModel = require('./category.model');
module.exports.CareerModel = require('./career.model');
module.exports.Latestupdatemodel = require('./LatestUpdate.Model');
module.exports.contactmodel = require('./contact.model');

  


sequelize.sync().then((result)=>{
    logger.log('info', 'Data synced successfully')
}).catch(()=>{
    logger.log('info', 'Data is not synced')
});





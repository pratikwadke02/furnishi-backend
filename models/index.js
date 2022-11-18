const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user/user.model.js')(sequelize, Sequelize);
db.furnishiUser = require('./furnishiUser/furnishiUser.model.js')(sequelize, Sequelize);
db.assistantUser = require('./assistantUser/assistant.user.model.js')(sequelize, Sequelize);

db.enquiry = require('./enquiry/enquiry.model.js')(sequelize, Sequelize);

db.cordinator = require('./master/cordinator.model.js')(sequelize, Sequelize);
db.cordinatorType = require('./master/cordinator.Type.model.js')(sequelize, Sequelize);
db.factory = require('./master/factory.model.js')(sequelize, Sequelize);
db.location = require('./master/location.model.js')(sequelize, Sequelize);
db.product = require('./master/product.model.js')(sequelize, Sequelize);
db.snagAction = require('./master/snag.action.model.js')(sequelize, Sequelize);
db.snagCost = require('./master/snag.cost.model.js')(sequelize, Sequelize);
db.snagIssue = require('./master/snag.issue.model.js')(sequelize, Sequelize);
db.snagSolution = require('./master/snag.solution.model.js')(sequelize, Sequelize);
db.source = require('./master/source.model.js')(sequelize, Sequelize);
db.statusAction = require('./master/status.action.model.js')(sequelize, Sequelize);
db.status = require('./master/status.model.js')(sequelize, Sequelize);
db.workType = require('./master/work.type.model.js')(sequelize, Sequelize);
db.carcass = require('./master/carcass.model.js')(sequelize, Sequelize);
db.shutter = require('./master/shutter.model.js')(sequelize, Sequelize);
db.designer = require('./master/designer.model.js')(sequelize, Sequelize);
db.planner = require('./master/planner.model.js')(sequelize, Sequelize);
db.salesPerson = require('./master/sales.person.model.js')(sequelize, Sequelize);
db.finalSiteSurveyor = require('./master/final.site.surveyor.model.js')(sequelize, Sequelize);
db.factoryEngineer = require('./master/factory.engineer.model.js')(sequelize, Sequelize);
db.panel = require('./master/panel.model.js')(sequelize, Sequelize);

db.order = require('./order/order.model.js')(sequelize, Sequelize);
db.orderList = require('./orderList/orderList.model.js')(sequelize, Sequelize);
db.furnishiOrder = require('./furnishiOrder/furnishiOrder.model.js')(sequelize, Sequelize);

db.surveyPartner = require('./registration/survey.partner.model.js')(sequelize, Sequelize);
db.workPartner = require('./registration/work.partner.model.js')(sequelize, Sequelize);

db.snagList = require('./snaglist/snag.list.model.js')(sequelize, Sequelize);

db.history = require('./history/history.model.js')(sequelize, Sequelize);

module.exports = db;
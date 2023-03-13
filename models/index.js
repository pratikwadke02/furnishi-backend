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
db.partner = require('./partner/partner.model.js')(sequelize, Sequelize);

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

db.enquiryCosting = require('./costing/enquiry.costing.model.js')(sequelize, Sequelize);

// User Enquiry Association
db.user.hasMany(db.enquiry, { foreignKey: "user_id" });
db.enquiry.belongsTo(db.user, { foreignKey: "user_id" });

// User Master Association
db.user.hasMany(db.cordinator, { foreignKey: "user_id", onDelete: "cascade" });
db.cordinator.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.cordinatorType, { foreignKey: "user_id", onDelete: "cascade" });
db.cordinatorType.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.factory, { foreignKey: "user_id", onDelete: "cascade" });
db.factory.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.location, { foreignKey: "user_id", onDelete: "cascade" });
db.location.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.product, { foreignKey: "user_id", onDelete: "cascade" });
db.product.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.snagAction, { foreignKey: "user_id", onDelete: "cascade" });
db.snagAction.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.snagCost, { foreignKey: "user_id", onDelete: "cascade" });
db.snagCost.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.snagIssue, { foreignKey: "user_id", onDelete: "cascade" });
db.snagIssue.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.snagSolution, { foreignKey: "user_id", onDelete: "cascade" });
db.snagSolution.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.source, { foreignKey: "user_id", onDelete: "cascade" });
db.source.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.statusAction, { foreignKey: "user_id", onDelete: "cascade" });
db.statusAction.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.status, { foreignKey: "user_id", onDelete: "cascade" });
db.status.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.workType, { foreignKey: "user_id", onDelete: "cascade" });
db.workType.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.carcass, { foreignKey: "user_id", onDelete: "cascade" });
db.carcass.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.shutter, { foreignKey: "user_id", onDelete: "cascade" });
db.shutter.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.designer, { foreignKey: "user_id", onDelete: "cascade" });
db.designer.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.planner, { foreignKey: "user_id", onDelete: "cascade" });
db.planner.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.salesPerson, { foreignKey: "user_id", onDelete: "cascade" });
db.salesPerson.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.finalSiteSurveyor, { foreignKey: "user_id", onDelete: "cascade" });
db.finalSiteSurveyor.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.factoryEngineer, { foreignKey: "user_id", onDelete: "cascade" });
db.factoryEngineer.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.panel, { foreignKey: "user_id", onDelete: "cascade" });
db.panel.belongsTo(db.user, { foreignKey: "user_id" });

// User Order Association
db.user.hasMany(db.order, { foreignKey: "user_id" });
db.order.belongsTo(db.user, { foreignKey: "user_id" });
db.user.hasMany(db.orderList, { foreignKey: "user_id" });
db.orderList.belongsTo(db.user, { foreignKey: "user_id" });

module.exports = db;
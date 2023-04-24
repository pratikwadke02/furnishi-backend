module.exports = (app) => {
    const user = require('../controllers/user/user.controller.js');
    const furnishiUser = require('../controllers/furnishiUser/furnishi.user.controller.js');
    const assistantUser = require('../controllers/assistantUser/assistant.user.controller.js');
    const partner = require('../controllers/partner/partner.controller.js');

    const snagList = require('../controllers/snaglist/snaglist.controller.js');

    const surveyPartner = require('../controllers/registration/survey.controller.js');
    const workPartner = require('../controllers/registration/work.controller.js');

    const order = require('../controllers/order/order.controller.js');
    const orderList = require('../controllers/orderList/orderList.controller.js');
    const furnishiOrder = require('../controllers/furnishiOrder/furnishi.order.controller.js');

    const enquiry = require('../controllers/enquiry/enquiry.controller.js');
    const { findUserNotification } = require('../controllers/furnishiNotification/notificationController');

    const cordinator = require('../controllers/master/cordinator.controller.js');
    const cordinatorType = require('../controllers/master/cordinator.type.controller.js');
    const factory = require('../controllers/master/factory.controller.js');
    const location = require('../controllers/master/location.controller.js');
    const product = require('../controllers/master/product.controller.js');
    const snagAction = require('../controllers/master/snag.action.controller.js');
    const snagCost = require('../controllers/master/snag.cost.controller.js');
    const snagIssue = require('../controllers/master/snag.issue.controller.js');
    const snagSolution = require('../controllers/master/snag.solution.controller.js');
    const source = require('../controllers/master/source.controller.js');
    const statusAction = require('../controllers/master/status.action.controller.js');
    const status = require('../controllers/master/status.controller.js');
    const workType = require('../controllers/master/work.type.controller.js');
    const carcass = require('../controllers/master/carcass.controller.js');
    const shutter = require('../controllers/master/shutter.controller.js');
    const designer = require('../controllers/master/designer.controller.js');
    const planner = require('../controllers/master/planner.controller.js');
    const salesPerson = require('../controllers/master/sales.person.controller.js');
    const finalSiteSurveyor = require('../controllers/master/final.site.surveyor.controller.js');
    const factoryEngineer = require('../controllers/master/factory.engineer.controller.js');
    const panel = require('../controllers/master/panel.controller.js');

    const history = require('../controllers/history/history.controller.js');

    const enquiryCosting = require('../controllers/costing/costing.controller.js');
    // middleware
    const checkDuplicatePartner = require('../middleware/partner.js');
    const { verifyUserToken } = require('../middleware/verifyToken');

    const router = require('express').Router();


    router.post("/register", user.register);
    router.post("/login", user.login);
    router.get("/getAllUsers", user.findAll);

    router.post("/registerFurnishi", furnishiUser.register);
    router.post("/loginFurnishi", furnishiUser.login);
    router.get("/getAllFurnishiUsers", furnishiUser.findAll);

    router.post("/registerAssistant", assistantUser.register);
    router.post("/loginAssistant", assistantUser.login);
    router.get("/getAllAssistantUsers", assistantUser.findAll);

    // router.post("/registerPartner", [checkDuplicatePartner.checkDuplicatePartner], partner.register );
    // router.post("/loginPartner", partner.login );
    // router.get("/getAllPartners", partner.findAll );
    // router.get("/getWorkPartners", partner.findAllWorkPartners );
    // router.get("/getSurveyPartners", partner.findAllSurveyPartners );

    router.post("/addSource", verifyUserToken, source.create);
    router.get("/getSources", verifyUserToken, source.findAll);

    router.post("/addCordinatorType", verifyUserToken, cordinatorType.create);
    router.get("/getCordinatorTypes", verifyUserToken, cordinatorType.findAll);

    router.post("/addCordinator", verifyUserToken, cordinator.create);
    router.get("/getCordinators", verifyUserToken, cordinator.findAll);

    router.post("/addFactoryInfo", verifyUserToken, factory.create);
    router.get("/getFactoryInfos", verifyUserToken, factory.findAll);

    router.post("/addProduct", verifyUserToken, product.create);
    router.get("/getProducts", verifyUserToken, product.findAll);

    router.post("/addLocation", verifyUserToken, location.create);
    router.get("/getLocations", verifyUserToken, location.findAll);

    router.post("/addSnagAction", verifyUserToken, snagAction.create);
    router.get("/getSnagActions", verifyUserToken, snagAction.findAll);

    router.post("/addSnagCost", verifyUserToken, snagCost.create);
    router.get("/getSnagCosts", verifyUserToken, snagCost.findAll);

    router.post("/addSnagIssue", verifyUserToken, snagIssue.create);
    router.get("/getSnagIssues", verifyUserToken, snagIssue.findAll);

    router.post("/addSnagSolution", verifyUserToken, snagSolution.create);
    router.get("/getSnagSolutions", verifyUserToken, snagSolution.findAll);

    router.post("/addStatusAction", verifyUserToken, statusAction.create);
    router.get("/getStatusActions", verifyUserToken, statusAction.findAll);

    router.post("/addStatus", verifyUserToken, status.create);
    router.get("/getStatuses", verifyUserToken, status.findAll);

    router.post("/addWorkType", verifyUserToken, workType.create);
    router.get("/getWorkTypes", verifyUserToken, workType.findAll);

    router.post("/addEnquiry", verifyUserToken, enquiry.create);
    router.get("/getEnquiries", verifyUserToken, enquiry.findAll);

    router.post("/addOrder", verifyUserToken, order.create);
    router.get("/getOrders", verifyUserToken, order.fmOrder);

    router.post("/addFurnishiOrder", furnishiOrder.create);
    router.get("/getFurnishiOrders", furnishiOrder.findAll);

    router.post("/addSnaglist", snagList.createSnagList);
    router.get("/getSnaglists", snagList.fmSnaglist);

    router.post("/addOrderList", verifyUserToken, orderList.create);
    router.get("/getOrderLists", verifyUserToken, orderList.findAll);
    router.get("/getOrderListByAssistantUser/:id", orderList.findOrderListByAssistantUser);

    router.post("/addCarcass", verifyUserToken, carcass.create);
    router.get("/getCarcasses", verifyUserToken, carcass.findAll);

    router.post("/addShutter", verifyUserToken, shutter.create);
    router.get("/getShutters", verifyUserToken, shutter.findAll);

    router.post("/addDesigner", verifyUserToken, designer.create);
    router.get("/getDesigners", verifyUserToken, designer.findAll);

    router.post("/addPlanner", verifyUserToken, planner.create);
    router.get("/getPlanners", verifyUserToken, planner.findAll);

    router.post("/addSalesPerson", verifyUserToken, salesPerson.create);
    router.get("/getSalesPersons", verifyUserToken, salesPerson.findAll);

    router.post("/addFinalSiteSurveyor", verifyUserToken, finalSiteSurveyor.create);
    router.get("/getFinalSiteSurveyors", verifyUserToken, finalSiteSurveyor.findAll);

    router.post("/addFactoryEngineer", verifyUserToken, factoryEngineer.create);
    router.get("/getFactoryEngineers", verifyUserToken, factoryEngineer.findAll);

    router.post("/addPanel", verifyUserToken, panel.create);
    router.get("/getPanels", verifyUserToken, panel.findAll);

    router.get("/getHistory", history.findAll);

    router.get("/getEnquiryCosting", enquiryCosting.findEnquiryCosting);

    router.get("/myNotifications", verifyUserToken, findUserNotification);

    app.use("/api/furnishi", router);
}
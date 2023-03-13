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
    const { verifyToken } = require('../middleware/verifyUserToken');

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

    router.post("/addSource", verifyToken, source.create);
    router.get("/getSources", verifyToken, source.findAll);

    router.post("/addCordinatorType", verifyToken, cordinatorType.create);
    router.get("/getCordinatorTypes", verifyToken, cordinatorType.findAll);

    router.post("/addCordinator", verifyToken, cordinator.create);
    router.get("/getCordinators", verifyToken, cordinator.findAll);

    router.post("/addFactoryInfo", verifyToken, factory.create);
    router.get("/getFactoryInfos", verifyToken, factory.findAll);

    router.post("/addProduct", verifyToken, product.create);
    router.get("/getProducts", verifyToken, product.findAll);

    router.post("/addLocation", verifyToken, location.create);
    router.get("/getLocations", verifyToken, location.findAll);

    router.post("/addSnagAction", verifyToken, snagAction.create);
    router.get("/getSnagActions", verifyToken, snagAction.findAll);

    router.post("/addSnagCost", verifyToken, snagCost.create);
    router.get("/getSnagCosts", verifyToken, snagCost.findAll);

    router.post("/addSnagIssue", verifyToken, snagIssue.create);
    router.get("/getSnagIssues", verifyToken, snagIssue.findAll);

    router.post("/addSnagSolution", verifyToken, snagSolution.create);
    router.get("/getSnagSolutions", verifyToken, snagSolution.findAll);

    router.post("/addStatusAction", verifyToken, statusAction.create);
    router.get("/getStatusActions", verifyToken, statusAction.findAll);

    router.post("/addStatus", verifyToken, status.create);
    router.get("/getStatuses", verifyToken, status.findAll);

    router.post("/addWorkType", verifyToken, workType.create);
    router.get("/getWorkTypes", verifyToken, workType.findAll);

    router.post("/addEnquiry", verifyToken, enquiry.create);
    router.get("/getEnquiries", verifyToken, enquiry.findAll);

    router.post("/addOrder", verifyToken, order.create);
    router.get("/getOrders", verifyToken, order.fmOrder);

    router.post("/addFurnishiOrder", furnishiOrder.create);
    router.get("/getFurnishiOrders", furnishiOrder.findAll);

    router.post("/addSnaglist", snagList.createSnagList);
    router.get("/getSnaglists", snagList.fmSnaglist);

    router.post("/addOrderList", verifyToken, orderList.create);
    router.get("/getOrderLists", verifyToken, orderList.findAll);
    router.get("/getOrderListByAssistantUser/:id", orderList.findOrderListByAssistantUser);

    router.post("/addCarcass", verifyToken, carcass.create);
    router.get("/getCarcasses", verifyToken, carcass.findAll);

    router.post("/addShutter", verifyToken, shutter.create);
    router.get("/getShutters", verifyToken, shutter.findAll);

    router.post("/addDesigner", verifyToken, designer.create);
    router.get("/getDesigners", verifyToken, designer.findAll);

    router.post("/addPlanner", verifyToken, planner.create);
    router.get("/getPlanners", verifyToken, planner.findAll);

    router.post("/addSalesPerson", verifyToken, salesPerson.create);
    router.get("/getSalesPersons", verifyToken, salesPerson.findAll);

    router.post("/addFinalSiteSurveyor", verifyToken, finalSiteSurveyor.create);
    router.get("/getFinalSiteSurveyors", verifyToken, finalSiteSurveyor.findAll);

    router.post("/addFactoryEngineer", verifyToken, factoryEngineer.create);
    router.get("/getFactoryEngineers", verifyToken, factoryEngineer.findAll);

    router.post("/addPanel", verifyToken, panel.create);
    router.get("/getPanels", verifyToken, panel.findAll);

    router.get("/getHistory", history.findAll);

    router.get("/getEnquiryCosting", enquiryCosting.findEnquiryCosting);

    app.use("/api/furnishi", router);
}
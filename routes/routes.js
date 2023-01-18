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

    const checkDuplicatePartner = require('../middleware/partner.js');

    const router = require('express').Router();


    router.post("/register", user.register);
    router.post("/login", user.login);
    router.get("/getAllUsers", user.findAll);

    router.post("/registerFurnishi", furnishiUser.register );
    router.post("/loginFurnishi", furnishiUser.login );
    router.get("/getAllFurnishiUsers", furnishiUser.findAll );

    router.post("/registerAssistant", assistantUser.register );
    router.post("/loginAssistant", assistantUser.login );
    router.get("/getAllAssistantUsers", assistantUser.findAll );

    // router.post("/registerPartner", [checkDuplicatePartner.checkDuplicatePartner], partner.register );
    // router.post("/loginPartner", partner.login );
    // router.get("/getAllPartners", partner.findAll );
    // router.get("/getWorkPartners", partner.findAllWorkPartners );
    // router.get("/getSurveyPartners", partner.findAllSurveyPartners );
    
    router.post("/addSource", source.create);
    router.get("/getSources", source.findAll);

    router.post("/addCordinatorType", cordinatorType.create);
    router.get("/getCordinatorTypes", cordinatorType.findAll);

    router.post("/addCordinator", cordinator.create);
    router.get("/getCordinators", cordinator.findAll);

    router.post("/addFactoryInfo", factory.create);
    router.get("/getFactoryInfos", factory.findAll);

    router.post("/addProduct", product.create);
    router.get("/getProducts", product.findAll);

    router.post("/addLocation", location.create);
    router.get("/getLocations", location.findAll);

    router.post("/addSnagAction", snagAction.create);
    router.get("/getSnagActions", snagAction.findAll);

    router.post("/addSnagCost", snagCost.create);
    router.get("/getSnagCosts", snagCost.findAll);

    router.post("/addSnagIssue", snagIssue.create);
    router.get("/getSnagIssues", snagIssue.findAll);

    router.post("/addSnagSolution", snagSolution.create);
    router.get("/getSnagSolutions", snagSolution.findAll);

    router.post("/addStatusAction", statusAction.create);
    router.get("/getStatusActions", statusAction.findAll);

    router.post("/addStatus", status.create);
    router.get("/getStatuses", status.findAll);

    router.post("/addWorkType", workType.create);
    router.get("/getWorkTypes", workType.findAll);

    router.post("/addEnquiry", enquiry.create);
    router.get("/getEnquiries", enquiry.findAll);

    router.post("/addOrder", order.create);
    router.get("/getOrders", order.fmOrder);

    router.post("/addFurnishiOrder", furnishiOrder.create );
    router.get("/getFurnishiOrders", furnishiOrder.findAll);

    router.post("/addSnaglist", snagList.createSnagList);
    router.get("/getSnaglists", snagList.fmSnaglist);

    router.post("/addOrderList", orderList.create);
    router.get("/getOrderLists", orderList.findAll);
    router.get("/getOrderListByAssistantUser/:id", orderList.findOrderListByAssistantUser);

    router.post("/addCarcass", carcass.create);
    router.get("/getCarcasses", carcass.findAll);

    router.post("/addShutter", shutter.create);
    router.get("/getShutters", shutter.findAll);

    router.post("/addDesigner", designer.create);
    router.get("/getDesigners", designer.findAll);

    router.post("/addPlanner", planner.create);
    router.get("/getPlanners", planner.findAll);

    router.post("/addSalesPerson", salesPerson.create);
    router.get("/getSalesPersons", salesPerson.findAll);

    router.post("/addFinalSiteSurveyor", finalSiteSurveyor.create);
    router.get("/getFinalSiteSurveyors", finalSiteSurveyor.findAll);

    router.post("/addFactoryEngineer", factoryEngineer.create);
    router.get("/getFactoryEngineers", factoryEngineer.findAll);

    router.post("/addPanel", panel.create);
    router.get("/getPanels", panel.findAll);
    
    router.get("/getHistory", history.findAll);

    router.get("/getEnquiryCosting", enquiryCosting.findEnquiryCosting);


    app.use("/api/furnishi", router);
}
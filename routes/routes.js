module.exports = (app) => {
    const user = require('../controllers/user/user.controller.js');

    const snagList = require('../controllers/snaglist/snaglist.controller.js');

    const surveyPartner = require('../controllers/registration/survey.controller.js');
    const workPartner = require('../controllers/registration/work.controller.js');

    const order = require('../controllers/order/order.controller.js');

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


    const router = require('express').Router();


    router.post("/register", user.register);
    router.post("/login", user.login);
    router.get("/getAllUsers", user.findAll);

    // router.post("/createSnagList", snagList.create);
    
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
    router.get("/getEnquiries", enquiry.fmEnquiry);

    router.post("/addOrder", order.create);
    router.get("/getOrders", order.fmOrder);

    router.post("/addSnaglist", snagList.createSnagList);
    router.get("/getSnaglists", snagList.fmSnaglist);

    app.use("/api/furnishi", router);
}
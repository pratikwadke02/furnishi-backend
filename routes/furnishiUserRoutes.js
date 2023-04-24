module.exports = (app) => {
    const { register, login, findAll } = require('../controllers/furnishiUser/furnishi.user.controller.js');
    const snagList = require('../controllers/snaglist/snaglist.controller.js');
    const furnishiOrder = require('../controllers/furnishiOrder/furnishi.order.controller.js');
    const enquiryCosting = require('../controllers/costing/costing.controller.js');
    const history = require('../controllers/history/history.controller.js');
    const { createNotification, findAdminNotification, deleteNotification, updateNotification } = require('../controllers/furnishiNotification/notificationController');

    // middleware
    const { verifyFurnishiUserToken } = require('../middleware/verifyToken');

    const furnishiUser = require('express').Router();


    furnishiUser.post("/registerFurnishi", register);
    furnishiUser.post("/loginFurnishi", login);
    furnishiUser.get("/getAllFurnishiUsers", findAll);

    furnishiUser.post("/createNotification", verifyFurnishiUserToken, createNotification);
    furnishiUser.get("/myNotifications", verifyFurnishiUserToken, findAdminNotification);
    furnishiUser.put("/updateNotification/:id", verifyFurnishiUserToken, updateNotification);
    furnishiUser.delete("/deleteNotification/:id", verifyFurnishiUserToken, deleteNotification);

    furnishiUser.post("/addFurnishiOrder", furnishiOrder.create);
    furnishiUser.get("/getFurnishiOrders", furnishiOrder.findAll);

    furnishiUser.post("/addSnaglist", snagList.createSnagList);
    furnishiUser.get("/getSnaglists", snagList.fmSnaglist);

    furnishiUser.get("/getHistory", history.findAll);

    furnishiUser.get("/getEnquiryCosting", enquiryCosting.findEnquiryCosting);

    app.use("/api/furnishiUser", furnishiUser);
}
const db = require('../../models');
const OrderList = db.orderList;
const AssistantUser = db.assistantUser;
const History = db.history;
const parser = require('../../utils/parser');

exports.create = async (req, res) => {
    try {
        var orderNumber;
        await OrderList.findAll().then(data => {
            if (data.length === 0) {
                orderNumber = 'ON100500';
            }
            else {
                var lastOrderNumber = data[data.length - 1].orderNumber;
                var lastOrderNumberNumber = parseInt(lastOrderNumber.substring(2));
                orderNumber = 'ON' + (lastOrderNumberNumber + 1);
            }
        });
        console.log(req.body.assembly);
        const data = await OrderList.create({
            orderNumber: orderNumber,
            updatedBy: req.body.updatedBy,
            receivedDate: req.body.receivedDate,
            targetDate: req.body.targetDate,
            customerName: req.body.customerName,
            customerNumber: req.body.customerNumber,
            siteAddress: req.body.siteAddress,
            sitePincode: req.body.sitePincode,
            siteGoogleLocation: req.body.siteGoogleLocation,
            source: req.body.source,
            sourceCordinator: req.body.sourceCordinator,
            sourceCordinatorNumber: req.body.sourceCordinatorNumber,
            customerCordinator: req.body.customerCordinator,
            customerCordinatorNumber: req.body.customerCordinatorNumber,
            factoryCordinator: req.body.factoryCordinator,
            factoryCordinatorNumber: req.body.factoryCordinatorNumber,
            product: req.body.product,
            designDocument: req.body.designDocument,
            location: req.body.location,
            noOfServices: req.body.noOfServices,
            area: req.body.area,
            validatedArea: req.body.validatedArea,
            orderValue: req.body.orderValue,
            paymentReceived: req.body.paymentReceived,
            currentStatus: req.body.currentStatus,
            carcass: req.body.carcass,
            shutter: req.body.shutter,
            salesPerson: req.body.salesPerson,
            designer: req.body.designer,
            indentNumber: req.body.indentNumber,
            finalSiteSurveyor: req.body.finalSiteSurveyor,
            workStartTime: req.body.workStartTime,
            workEndTime: req.body.workEndTime,
            factoryEngineer: req.body.factoryEngineer,
            accountClearance: req.body.accountClearance,
            designClearance: req.body.designClearance,
            indentRelease: req.body.indentRelease,
            shopDocuments: req.body.shopDocuments,
            stockCheck: req.body.stockCheck,
            poPrepare: req.body.poPrepare,
            poApproval: req.body.poApproval,
            poRelease: req.body.poRelease,
            rawMaterialAvailable: req.body.rawMaterialAvailable,
            otherMaterialAvailable: req.body.otherMaterialAvailable,
            jobWorkDone: req.body.jobWorkDone,
            panelProduction: req.body.panelProduction,
            paintMaterialProduction: req.body.paintMaterialProduction,
            otherMaterialProduction: req.body.otherMaterialProduction,
            assembly: req.body.assembly,
            cleaning: req.body.cleaning,
            packing: req.body.packing,
            dispatch: req.body.dispatch,
            installationAssigned: req.body.installationAssigned,
            installationStatus: req.body.installationStatus,
            installationStart: req.body.installationStart,
            installationEnd: req.body.installationEnd,
            handover: req.body.handover,
            user_id: req.user.id
        });
        const updatedOn = String(data.updatedAt);
        const history = await History.create({
            orderNumber: orderNumber,
            updatedBy: req.body.updatedBy,
            updatedOn: updatedOn,
        });
        // console.log(history);
        res.send(data);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the OrderList."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        await OrderList.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving OrderList."
        });
    }
};

exports.findOrderListByAssistantUser = async (req, res) => {
    try {
        const assistantUser = await AssistantUser.findOne({
            where: {
                id: req.params.id
            },
        });
        const orderList = await OrderList.findOne({
            where: {
                orderNumber: assistantUser.orderNumber
            }
        });
        const parseData = parser.parseData(assistantUser, orderList);
        res.send(parseData);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving OrderList."
        });
    }
};



        // const orderListData = {
        //     orderNumber: orderList.orderNumber,
        //     receivedDate: parseInt(assistantUser.receivedDate, 10) === 1 ? orderList.receivedDate : null,
        //     targetDate: parseInt(assistantUser.targetDate, 10) === 1 ? orderList.targetDate : null,
        //     customerName: parseInt(assistantUser.customerName, 10) === 1 ? orderList.customerName : null,
        //     customerNumber: assistantUser.customerNumber === 1 ? orderList.customerNumber : null,
        //     siteAddress: assistantUser.siteAddress === 1 ? orderList.siteAddress : null,
        //     sitePincode: assistantUser.sitePincode === 1 ? orderList.sitePincode : null,
        //     siteGoogleLocation: assistantUser.siteGoogleLocation === 1 ? orderList.siteGoogleLocation : null,
        //     source: assistantUser.source === 1 ? orderList.source : null,
        //     sourceCordinator: assistantUser.sourceCordinator === 1 ? orderList.sourceCordinator : null,
        //     sourceCordinatorNumber: assistantUser.sourceCordinatorNumber === 1 ? orderList.sourceCordinatorNumber : null,
        //     customerCordinator: assistantUser.customerCordinator === 1 ? orderList.customerCordinator : null,
        //     customerCordinatorNumber: assistantUser.customerCordinatorNumber === 1 ? orderList.customerCordinatorNumber : null,
        //     factoryCordinator: assistantUser.factoryCordinator === 1 ? orderList.factoryCordinator : null,
        //     factoryCordinatorNumber: assistantUser.factoryCordinatorNumber === 1 ? orderList.factoryCordinatorNumber : null,
        //     product: assistantUser.product === 1 ? orderList.product : null,
        //     location: assistantUser.location === 1 ? orderList.location : null,
        //     noOfServices: assistantUser.noOfServices === 1 ? orderList.noOfServices : null,
        //     area: assistantUser.area === 1 ? orderList.area : null,
        //     orderValue: assistantUser.orderValue === 1 ? orderList.orderValue : null,
        //     paymentReceived: assistantUser.paymentReceived === 1 ? orderList.paymentReceived : null,
        //     currentStatus: assistantUser.currentStatus === 1 ? orderList.currentStatus : null,
        //     carcass: assistantUser.carcass === 1 ? orderList.carcass : null,
        //     shutter: assistantUser.shutter === 1 ? orderList.shutter : null,
        //     salesPerson: assistantUser.salesPerson === 1 ? orderList.salesPerson : null,
        //     designer: assistantUser.designer === 1 ? orderList.designer : null,
        //     indentNumber: assistantUser.indentNumber === 1 ? orderList.indentNumber : null,
        //     finalSiteSurveyor: assistantUser.finalSiteSurveyor === 1 ? orderList.finalSiteSurveyor : null,
        //     workStartTime: assistantUser.workStartTime === 1 ? orderList.workStartTime : null,
        //     workEndTime: assistantUser.workEndTime === 1 ? orderList.workEndTime : null,
        //     factoryEngineer: assistantUser.factoryEngineer === 1 ? orderList.factoryEngineer : null,
        //     accountClearance: assistantUser.accountClearance === 1 ? orderList.accountClearance : null,
        //     designClearance: assistantUser.designClearance === 1 ? orderList.designClearance : null,
        //     indentRelease: assistantUser.indentRelease === 1 ? orderList.indentRelease : null,
        //     shopDocuments: assistantUser.shopDocuments === 1 ? orderList.shopDocuments : null,
        //     stockCheck: assistantUser.stockCheck === 1 ? orderList.stockCheck : null,
        //     poPrepare: assistantUser.poPrepare === 1 ? orderList.poPrepare : null,
        //     poApproval: assistantUser.poApproval === 1 ? orderList.poApproval : null,
        //     poRelease: assistantUser.poRelease === 1 ? orderList.poRelease : null,
        //     rawMaterialAvailable: assistantUser.rawMaterialAvailable === 1 ? orderList.rawMaterialAvailable : null,
        //     otherMaterialAvailable: assistantUser.otherMaterialAvailable === 1 ? orderList.otherMaterialAvailable : null,
        //     jobWorkDone: assistantUser.jobWorkDone === 1 ? orderList.jobWorkDone : null,
        //     paintMaterialProduction: assistantUser.paintMaterialProduction === 1 ? orderList.paintMaterialProduction : null,
        //     otherMaterialProduction: assistantUser.otherMaterialProduction === 1 ? orderList.otherMaterialProduction : null,
        //     panelProduction: assistantUser.panelProduction === 1 ? orderList.panelProduction : null,
        //     assembly: assistantUser.assembly === 1 ? orderList.assembly : null,
        //     cleaning: assistantUser.cleaning === 1 ? orderList.cleaning : null,
        //     packing: assistantUser.packing === 1 ? orderList.packing : null,
        //     dispatch: assistantUser.dispatch === 1 ? orderList.dispatch : null,
        // };
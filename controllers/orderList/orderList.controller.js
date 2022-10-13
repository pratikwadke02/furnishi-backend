const db = require('../../models');
const OrderList = db.orderList;

exports.create = async(req, res) => {
    try{
        var orderNumber;
        await OrderList.findAll().then(data => {
            if(data.length === 0){
                orderNumber = 'ON100500';
            }
            else{
                var lastOrderNumber = data[data.length - 1].orderNumber;
                var lastOrderNumberNumber = parseInt(lastOrderNumber.substring(2));
                orderNumber = 'ON' + (lastOrderNumberNumber + 1);
            }
        });
        await OrderList.create({
            orderNumber: orderNumber,
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
            validatedArea : req.body.validatedArea,
            orderValue: req.body.orderValue,
            receivedValue: req.body.receivedValue,
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
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Order."
            });
        }
        );
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the OrderList."
        });
    }
};

exports.findAll = async(req, res) => {
    try{
        await OrderList.findAll().then(data => {
            res.send(data);
        });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving OrderList."
        });
    }
};
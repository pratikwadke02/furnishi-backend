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
            source: req.body.source,
            client: req.body.client,
            address: req.body.address,
            product: req.body.product,
            location: req.body.location,
            value: req.body.value,
            received: req.body.received,
            status: req.body.status,
            carcass: req.body.carcass,
            shutter: req.body.shutter,
            salesPerson: req.body.salesPerson,
            planner: req.body.planner,
            designer: req.body.designer,
            indentNumber: req.body.indentNumber,
            finalSiteSurveyor: req.body.finalSiteSurveyor,
            workingTime: req.body.workingTime,
            accountClearance: req.body.accountClearance,
            designClearance: req.body.designClearance,
            mrpRelease: req.body.mrpRelease,
            shopDocuments: req.body.shopDocuments,
            stockCheck: req.body.stockCheck,
            poApproval: req.body.poApproval,
            poRelease: req.body.poRelease,
            rawMaterialPurchase: req.body.rawMaterialPurchase,
            accHardwareGlassPurchase: req.body.accHardwareGlassPurchase,
            jobWork: req.body.jobWork,
            finalSiteSurveyor: req.body.finalSiteSurveyor,
            panelProduction: req.body.panelProduction,
            jobWorkMaterial: req.body.jobWorkMaterial,
            metalWork: req.body.metalWork,
            paintWork: req.body.paintWork,
            assembly: req.body.assembly,
            packing: req.body.packing,
            dispatch: req.body.dispatch,
            installation: req.body.installation,
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
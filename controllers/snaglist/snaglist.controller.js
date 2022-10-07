const db = require("../../models");
const SnagList = db.snagList;

module.exports.createSnagList = async (req, res) => {
    try{
        console.log(req.body);
        var orderId;
    // check if first order
    await SnagList.findAll().then((data) => {
      if (data.length == 0) {
        // first enquiry
        orderId = "O100500";
      } else {
        // not first enquiry
        // get last enquiry code
        var lastOrderCode = data[data.length - 1].orderCode;
        // get last 3 digits
        var lastDigits = lastOrderCode.substring(1, 7);
        // increment by 1
        var incrementedDigits = parseInt(lastDigits, 10) + 1;
        // generate code as E100500
        orderId = "O" + incrementedDigits;
      }
    });
    await SnagList.create({
        orderId: orderId,
        name: req.body.name,
        number: req.body.number,
        address: req.body.address,
        pincode: req.body.pincode,
        locationCode: req.body.locationCode,
        customerCordinator: req.body.customerCordinator,
        customerCordinatorNumber: req.body.customerCordinatorNumber,
        sourceCordinator: req.body.sourceCordinator,
        sourceCordinatorNumber: req.body.sourceCordinatorNumber,
        factoryCordinator: req.body.factoryCordinator,
        factoryCordinatorNumber: req.body.factoryCordinatorNumber,
        productId: req.body.productId,
        product: req.body.product,
        productCode: req.body.productCode,
        faceArea: req.body.faceArea,
        targetStartDate: req.body.targetStartDate,
        targetEndDate: req.body.targetEndDate,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        issue: req.body.issue,
        reason: req.body.reason,
        solution: req.body.solution,
        action: req.body.action,
        pic: req.body.pic,
        video: req.body.video,
        totalService: req.body.totalService,
        serviceDone: req.body.serviceDone,
        servicePending: req.body.servicePending,
        serviceCalendar: req.body.serviceCalendar,
        estimatedCost: req.body.estimatedCost,
        actualCost: req.body.actualCost,
        totalHistory: req.body.totalHistory,
        totalExpenseTillDate: req.body.totalExpenseTillDate,
        estimatedQuoteAfterDiscount: req.body.estimatedQuoteAfterDiscount,
        status: req.body.status,
    }).then((data) => {
        res.status(200).send({
            message: "SnagList created successfully",
            data: data,
        });
    });
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the SnagList."
        });
    }
}

module.exports.fmSnaglist = async (req, res) => {
    try{
        await SnagList.findAll().then(data => {
            res.send(data);
        });
    }
    catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving SnagList."
        });
    }
}

module.exports.spSnaglist = async (req, res) => {
    try{
        const data = await SnagList.findAll();
        const spSnaglist = data.map((item) => {
            return {
                id: item.id,
                orderId: item.orderId,
                address: item.address,
                pincode: item.pincode,
                locationCode: item.locationCode,
                customerCordinator: item.customerCordinator,
                customerCordinatorNumber: item.customerCordinatorNumber,
                sourceCordinator: item.sourceCordinator,
                sourceCordinatorNumber: item.sourceCordinatorNumber,
                factoryCordinator: item.factoryCordinator,
                factoryCordinatorNumber: item.factoryCordinatorNumber,
                productId: item.productId,
                product: item.product,
                productCode: item.productCode,
                faceArea: item.faceArea,
                targetStartDate: item.targetStartDate,
                targetEndDate: item.targetEndDate,
                startDate: item.startDate,
                endDate: item.endDate,
                issue: item.issue,
                reason: item.reason,
                solution: item.solution,
                action: item.action,
                pic: item.pic,
                video: item.video,
                status: item.status,
            }
        });
        res.status(200).send(spSnaglist);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the SnagList."
        });
    }
}

module.exports.wpSnagList = async (req, res) => {
    try{
        const data = await SnagList.findAll();
        const wpSnaglist = data.map((item) => {
            return{
                id: item.id,
                orderId: item.orderId,
                address: item.address,
                pincode: item.pincode,
                locationCode: item.locationCode,
                customerCordinator: item.customerCordinator,
                customerCordinatorNumber: item.customerCordinatorNumber,
                sourceCordinator: item.sourceCordinator,
                sourceCordinatorNumber: item.sourceCordinatorNumber,
                factoryCordinator: item.factoryCordinator,
                factoryCordinatorNumber: item.factoryCordinatorNumber,
                productId: item.productId,
                product: item.product,
                productCode: item.productCode,
                faceArea: item.faceArea,
                targetStartDate: item.targetStartDate,
                targetEndDate: item.targetEndDate,
                startDate: item.startDate,
                endDate: item.endDate,
                issue: item.issue,
                reason: item.reason,
                solution: item.solution,
                action: item.action,
                pic: item.pic,
                video: item.video,
                status: item.status,
            }
        });
        res.status(200).send(wpSnaglist);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the SnagList."
        });
    }
}

module.exports.fcSnaglist = async (req, res) => {
    try{
        const data = await SnagList.findAll();
        const fcSnaglist = data.map((item) => {
            return{
                id: item.id,
                orderId: item.orderId,
                name: item.name,
                address: item.address,
                pincode: item.pincode,
                locationCode: item.locationCode,
                customerCordinator: item.customerCordinator,
                customerCordinatorNumber: item.customerCordinatorNumber,
                sourceCordinator: item.sourceCordinator,
                sourceCordinatorNumber: item.sourceCordinatorNumber,
                factoryCordinator: item.factoryCordinator,
                factoryCordinatorNumber: item.factoryCordinatorNumber,
                productId: item.productId,
                product: item.product,
                productCode: item.productCode,
                faceArea: item.faceArea,
                targetStartDate: item.targetStartDate,
                targetEndDate: item.targetEndDate,
                startDate: item.startDate,
                endDate: item.endDate,
                issue: item.issue,
                reason: item.reason,
                solution: item.solution,
                action: item.action,
                pic: item.pic,
                video: item.video,
                status: item.status,
            }
        }
        );
        res.status(200).send(fcSnaglist);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the SnagList."
        });
    }
}

module.exports.ccSnaglist = async (req, res) => {
    try{
        const data = await SnagList.findAll();
        const ccSnaglist = data.map((item) => {
            return{
                id: item.id,
                orderId: item.orderId,
                name: item.name,
                address: item.address,
                pincode: item.pincode,
                locationCode: item.locationCode,
                customerCordinator: item.customerCordinator,
                customerCordinatorNumber: item.customerCordinatorNumber,
                sourceCordinator: item.sourceCordinator,
                sourceCordinatorNumber: item.sourceCordinatorNumber,
                factoryCordinator: item.factoryCordinator,
                factoryCordinatorNumber: item.factoryCordinatorNumber,
                productId: item.productId,
                product: item.product,
                productCode: item.productCode,
                targetStartDate: item.targetStartDate,
                targetEndDate: item.targetEndDate,
                startDate: item.startDate,
                endDate: item.endDate,
                issue: item.issue,
                reason: item.reason,
                solution: item.solution,
                action: item.action,
                pic: item.pic,
                video: item.video,
                status: item.status,
            }
        });
        res.status(200).send(ccSnaglist);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the SnagList."
        });
    }
}
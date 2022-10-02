const db = require("../../models");
const SnagList = db.snaglist;

module.exports.createSnagList = async (req, res) => {
    try{
        const snaglist = await SnagList.create(req.body);
        res.status(201).send(snaglist);
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the SnagList."
        });
    }
}

module.exports.fmSnaglist = async (req, res) => {
    SnagList.findAll().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        res.send(err);
        console.log(err);
    }
    );
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
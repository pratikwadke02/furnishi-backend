const db = require("../../models");
const FurnishiOrder = db.furnishiOrder;

exports.create = async(req, res) => {
  try{
      var orderNumber;
      await FurnishiOrder.findAll().then(data => {
          if(data.length === 0){
              orderNumber = 'ON100500';
          }
          else{
              var lastOrderNumber = data[data.length - 1].orderNumber;
              var lastOrderNumberNumber = parseInt(lastOrderNumber.substring(2));
              orderNumber = 'ON' + (lastOrderNumberNumber + 1);
          }
      });
      await FurnishiOrder.create({
          orderNumber: orderNumber,
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
          area: req.body.area,
          currentStatus: req.body.currentStatus,
          carcass: req.body.carcass,
          shutter: req.body.shutter,
          workStartTime: req.body.workStartTime,
          workEndTime: req.body.workEndTime,
          factoryEngineer: req.body.factoryEngineer,
          dispatch: req.body.dispatch,
          installationAssigned: req.body.installationAssigned,
          installationStatus: req.body.installationStatus,
          installationStart: req.body.installationStart,
          installationEnd: req.body.installationEnd,
          handover: req.body.handover,
          conversation: req.body.conversation,
          snags: req.body.snags,
          pictures: req.body.pictures,
          videos: req.body.videos,
          surveyCost: req.body.surveyCost,
          installationCost: req.body.installationCost,
          complaintCost: req.body.complaintCost,
          serviceCost: req.body.serviceCost,
          estimate: req.body.estimate,
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
          message: error.message || "Some error occurred while creating the Order."
      });
  }
};

exports.findAll = async (req, res) => {
  try {
    await FurnishiOrder.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving orders.",
    });
  }
};

exports.spOrder = async (req, res) => {
  try {
    const data = await Order.findAll();
    const spOrder = data.map((order) => {
      return {
        orderId: order.orderId,
        customerId: order.customerId,
        address: order.address,
        pincode: order.pincode,
        locationCode: order.locationCode,
        customerCordinator: order.customerCordinator,
        customerCordinatorNumber: order.customerCordinatorNumber,
        sourceCordinator: order.sourceCordinator,
        sourceCordinatorNumber: order.sourceCordinatorNumber,
        factoryCordinator: order.factoryCordinator,
        factoryCordinatorNumber: order.factoryCordinatorNumber,
        productId: order.productId,
        product: order.product,
        productCode: order.productCode,
        faceArea: order.faceArea,
        targetStartDate: order.targetStartDate,
        targetEndDate: order.targetEndDate,
        startDate: order.startDate,
        endDate: order.endDate,
        status: order.status,
      };
    });
    res.status(200).send(spOrder);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving orders.",
    });
  }
};

exports.wpOrder = async (req, res) => {
  try {
    const data = await Order.findAll();
    const wpOrder = data.map((order) => {
      return {
        orderId: order.orderId,
        customerId: order.customerId,
        address: order.address,
        pincode: order.pincode,
        locationCode: order.locationCode,
        customerCordinator: order.customerCordinator,
        customerCordinatorNumber: order.customerCordinatorNumber,
        sourceCordinator: order.sourceCordinator,
        sourceCordinatorNumber: order.sourceCordinatorNumber,
        factoryCordinator: order.factoryCordinator,
        factoryCordinatorNumber: order.factoryCordinatorNumber,
        productId: order.productId,
        product: order.product,
        productCode: order.productCode,
        faceArea: order.faceArea,
        targetStartDate: order.targetStartDate,
        targetEndDate: order.targetEndDate,
        startDate: order.startDate,
        endDate: order.endDate,
        status: order.status,
      };
    });
    res.status(200).send(wpOrder);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving orders.",
    });
  }
};

exports.fcOrder = async (req, res) => {
  try {
    const data = await Order.findAll();
    const fcOrder = data.map((order) => {
      return {
        orderId: order.orderId,
        customerId: order.customerId,
        name: order.name,
        address: order.address,
        pincode: order.pincode,
        locationCode: order.locationCode,
        customerCordinator: order.customerCordinator,
        customerCordinatorNumber: order.customerCordinatorNumber,
        sourceCordinator: order.sourceCordinator,
        sourceCordinatorNumber: order.sourceCordinatorNumber,
        factoryCordinator: order.factoryCordinator,
        factoryCordinatorNumber: order.factoryCordinatorNumber,
        productId: order.productId,
        product: order.product,
        productCode: order.productCode,
        faceArea: order.faceArea,
        targetStartDate: order.targetStartDate,
        targetEndDate: order.targetEndDate,
        startDate: order.startDate,
        endDate: order.endDate,
        status: order.status,
      };
    });
    res.status(200).send(fcOrder);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving orders.",
    });
  }
};

exports.ccOrder = async (req, res) => {
    try {
        const data = await Order.findAll();
        const ccOrder = data.map((order) => {
        return {
            orderId: order.orderId,
            customerId: order.customerId,
            name: order.name,
            address: order.address,
            pincode: order.pincode,
            locationCode: order.locationCode,
            customerCordinator: order.customerCordinator,
            customerCordinatorNumber: order.customerCordinatorNumber,
            sourceCordinator: order.sourceCordinator,
            sourceCordinatorNumber: order.sourceCordinatorNumber,
            factoryCordinator: order.factoryCordinator,
            factoryCordinatorNumber: order.factoryCordinatorNumber,
            productId: order.productId,
            product: order.product,
            productCode: order.productCode,
            targetStartDate: order.targetStartDate,
            targetEndDate: order.targetEndDate,
            startDate: order.startDate,
            endDate: order.endDate,
            status: order.status,
        };
        });
        res.status(200).send(ccOrder);
    } catch (error) {
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving orders.",
        });
    }
    }
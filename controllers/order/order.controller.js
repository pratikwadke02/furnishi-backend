const db = require("../../models");
const Order = db.order;

exports.create = async (req, res) => {
  try {
    var orderId;
    // check if first order
    await Order.findAll().then((data) => {
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
    // order code does not exist
    // create order
    await Order.create({
      orderId: orderId,
      customerId: req.body.customerId,
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
      saleValue: req.body.saleValue,
      material: req.body.material,
      faceArea: req.body.faceArea,
      targetStartDate: req.body.targetStartDate,
      targetEndDate: req.body.targetEndDate,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      totalService: req.body.totalService,
      serviceDone: req.body.serviceDone,
      servicePending: req.body.servicePending,
      serviceCalendar: req.body.serviceCalendar,
      estimatedCost: req.body.estimatedCost,
      actualCost: req.body.actualCost,
      attachment: req.body.attachment,
      totalHistory: req.body.totalHistory,
      totalExpenseTillDate: req.body.totalExpenseTillDate,
      estimatedQuoteAfterDiscount: req.body.estimatedQuoteAfterDiscount,
      status: req.body.status,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Order.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Order.",
    });
  }
};

exports.fmOrder = async (req, res) => {
  try {
    await Order.findAll()
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
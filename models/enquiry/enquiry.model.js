module.exports = (sequelize, Sequelize) => {
    const Enquiry = sequelize.define("enquiry", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderId: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      pincode: {
        type: Sequelize.STRING,
      },
      locationCode: {
        type: Sequelize.STRING,
      },
      customerCordinator: {
        type: Sequelize.STRING,
      },
      customerCordinatorNumber: {
        type: Sequelize.STRING,
      },
      sourceCordinator: {
        type: Sequelize.STRING,
      },
      sourceCordinatorNumber: {
        type: Sequelize.STRING,
      },
      factoryCordinator: {
        type: Sequelize.STRING,
      },
      factoryCordinatorNumber: {
        type: Sequelize.STRING,
      },
      productId: {
        type: Sequelize.INTEGER,
      },
      product: {
        type: Sequelize.STRING,
      },
      productCode: {
        type: Sequelize.STRING,
      },
      saleValue: {
        type: Sequelize.STRING,
      },
      materialValue: {
        type: Sequelize.STRING,
      },
      faceArea: {
        type: Sequelize.STRING,
      },
      targetStartDate: {
        type: Sequelize.STRING,
      },
      targetEndDate: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.STRING,
      },
      endDate: {
        type: Sequelize.STRING,
      },
      totalService: {
        type: Sequelize.STRING,
      },
      serviceDone: {
        type: Sequelize.STRING,
      },
      servicePending: {
        type: Sequelize.STRING,
      },
      serviceCalendar: {
        type: Sequelize.STRING,
      },
      estimatedCost: {
        type: Sequelize.STRING,
      },
      actualCost: {
        type: Sequelize.STRING,
      },
      attachment: {
        type: Sequelize.STRING,
      },
      totalHistory: {
        type: Sequelize.STRING,
      },
      totalExpenseTillDate: {
        type: Sequelize.STRING,
      },
      statusAction: {
        type: Sequelize.STRING,
      },
      estimatedQuote: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.STRING,
      },
      estimatedQuoteAfterDiscount: {
        type: Sequelize.STRING,
      },
    });
    return Enquiry;
  };
  
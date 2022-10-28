module.exports = (sequelize, Sequelize) => {
    const FurnishiOrder = sequelize.define("furnishiOrder", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      targetDate: {
          type: Sequelize.STRING,
      },
      orderNumber: {
          type: Sequelize.STRING,
      },
      customerName: {
          type: Sequelize.STRING,
      },
      customerNumber: {
          type: Sequelize.STRING,
      },
      siteAddress: {
          type: Sequelize.STRING,
      },
      sitePincode: {
          type: Sequelize.STRING,
      },
      siteGoogleLocation: {
          type: Sequelize.STRING,
      },
      source: {
          type: Sequelize.STRING,
      },
      sourceCordinator: {
          type: Sequelize.STRING,
      },
      sourceCordinatorNumber: {
          type: Sequelize.STRING,
      },
      customerCordinator: {
          type: Sequelize.STRING,
      },
      customerCordinatorNumber: {
          type: Sequelize.STRING,
      },
      factoryCordinator: {
          type: Sequelize.STRING,
      },
      factoryCordinatorNumber: {
          type: Sequelize.STRING,
      },
      product: {
          type: Sequelize.STRING,
      },
      location: {
          type: Sequelize.STRING,
      },
      area: {
          type: Sequelize.STRING,
      },
      currentStatus: {
          type: Sequelize.STRING,
      },
      carcass: {
          type: Sequelize.STRING,
      },
      shutter: {
          type: Sequelize.STRING,
      },
      workStartTime: {
          type: Sequelize.STRING,
      },
      workEndTime: {
          type: Sequelize.STRING,
      },
      factoryEngineer: {
          type: Sequelize.STRING,
      },
      dispatch: {
          type: Sequelize.STRING,
      },
      installationAssigned: {
          type: Sequelize.STRING,
      },
      installationStart: {
          type: Sequelize.STRING,
      },
      installationStatus: {
          type: Sequelize.STRING,
      },
      installationEnd: {
          type: Sequelize.STRING,
      },
      handover: {
          type: Sequelize.STRING,
      },
      conversation: {
        type: Sequelize.STRING,
      },
      snags: {
        type: Sequelize.STRING,
      },
      pictures: {
        type: Sequelize.STRING,
      },
      videos: {
        type: Sequelize.STRING,
      },
      surveyCost: {
        type: Sequelize.STRING,
      },
      installationCost: {
        type: Sequelize.STRING,
      },
      complaintCost: {
        type: Sequelize.STRING,
      },
      serviceCost: {
        type: Sequelize.STRING,
      },
      estimate: {
        type: Sequelize.STRING,
      },
    });
    return FurnishiOrder;
  };
  
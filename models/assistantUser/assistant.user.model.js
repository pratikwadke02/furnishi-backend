module.exports = (sequelize, Sequelize) => {
    const AssistantUser = sequelize.define("assistantUser", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      panel: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      confirmPassword: {
        type: Sequelize.STRING,
      },
      orderNumber: {
        type: Sequelize.STRING,
      },
      receivedDate: {
        type: Sequelize.STRING,
      },
      targetDate: {
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
      designDocument: {
          type: Sequelize.STRING,
      },
      location: {
          type: Sequelize.STRING,
      },
      noOfServices: {
          type: Sequelize.STRING,
      },
      area: {
          type: Sequelize.STRING,
      },
      validatedArea: {
          type: Sequelize.STRING,
      },
      orderValue: {
          type: Sequelize.STRING,
      },
      paymentReceived: {
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
      salesPerson: {
          type: Sequelize.STRING,
      },
      designer: {
          type: Sequelize.STRING,
      },
      indentNumber: {
          type: Sequelize.STRING,
      },
      finalSiteSurveyor: {
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
      accountClearance: {
          type: Sequelize.STRING,
      },
      designClearance: {
          type: Sequelize.STRING,
      },
      indentRelease: {
          type: Sequelize.STRING,
      },
      shopDocuments: {
          type: Sequelize.STRING,
      },
      stockCheck: {
          type: Sequelize.STRING,
      },
      poPrepare: {
          type: Sequelize.STRING,
      },
      poApproval: {
          type: Sequelize.STRING,
      },
      poRelease: {
          type: Sequelize.STRING,
      },
      rawMaterialAvailable: {
          type: Sequelize.STRING,
      },
      otherMaterialAvailable: {
          type: Sequelize.STRING,
      },
      jobWorkDone: {
          type: Sequelize.STRING,
      },
      panelProduction: {
          type: Sequelize.STRING,
      },
      paintMaterialProduction: {
          type: Sequelize.STRING,
      },
      otherMaterialProduction: {
          type: Sequelize.STRING,
      },
      assembly: {
          type: Sequelize.STRING,
      },
      cleaning: {
          type: Sequelize.STRING,
      },
      packing: {
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
    });
    return AssistantUser;
  };
  
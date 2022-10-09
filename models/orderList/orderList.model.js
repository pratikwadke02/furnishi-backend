module.exports = (sequelize, Sequelize) => {
  const OrderList = sequelize.define("orderList", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    receivedDate: {
      type: Sequelize.STRING,
    },
    targetDate: {
        type: Sequelize.STRING,
    },
    orderNumber: {
        type: Sequelize.STRING,
    },
    source: {
        type: Sequelize.STRING,
    },
    client: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    product: {
        type: Sequelize.STRING,
    },
    location: {
        type: Sequelize.STRING,
    },
    value: {
        type: Sequelize.STRING,
    },
    received: {
        type: Sequelize.STRING,
    },
    status: {
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
    planner: {
        type: Sequelize.STRING,
    },
    indentNumber: {
        type: Sequelize.STRING,
    },
    finalSiteSurveyor: {
        type: Sequelize.STRING,
    },
    workingTime: {
        type: Sequelize.STRING,
    },
    accountClearance: {
        type: Sequelize.STRING,
    },
    designClearance: {
        type: Sequelize.STRING,
    },
    mrpRelease: {
        type: Sequelize.STRING,
    },
    shopDocuments: {
        type: Sequelize.STRING,
    },
    stockCheck: {
        type: Sequelize.STRING,
    },
    poApproval: {
        type: Sequelize.STRING,
    },
    poRelease: {
        type: Sequelize.STRING,
    },
    rawMaterialPurchase: {
        type: Sequelize.STRING,
    },
    accHardwareGlassPurchase: {
        type: Sequelize.STRING,
    },
    jobWork: {
        type: Sequelize.STRING,
    },
    finalSiteSurvey: {
        type: Sequelize.STRING,
    },
    panelProduction: {
        type: Sequelize.STRING,
    },
    jobWorkMaterial: {
        type: Sequelize.STRING,
    },
    metalWork: {
        type: Sequelize.STRING,
    },
    paintWork: {
        type: Sequelize.STRING,
    },
    assembly: {
        type: Sequelize.STRING,
    },
    packing: {
        type: Sequelize.STRING,
    },
    dispatch: {
        type: Sequelize.STRING,
    },
    installation: {
        type: Sequelize.STRING,
    },
    handover: {
        type: Sequelize.STRING,
    },
  });
  return OrderList;
};

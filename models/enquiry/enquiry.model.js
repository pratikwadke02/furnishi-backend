module.exports = (sequelize, Sequelize) => {
  const Enquiry = sequelize.define("enquiry", {
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
    sitePincode: {
        type: Sequelize.STRING,
    },
    product: {
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
    dispatch: {
        type: Sequelize.STRING,
    },
    estimate: {
        type: Sequelize.STRING,
    },
    action: {
      type: Sequelize.STRING,
    }
  });
  return Enquiry;
};

module.exports = (sequelize, Sequelize) => {
  const Partner = sequelize.define("partner", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    partnerType: {
      type: Sequelize.STRING,
    },
    details: {
        type: Sequelize.JSON,
    },
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    contactNumber : {
        type: Sequelize.STRING,
    },
    permanenetAddress: {
        type: Sequelize.STRING,
    },
    presentAddress: {
        type: Sequelize.STRING,
    },
    firmName: {
        type: Sequelize.STRING,
    },
    workLocation: {
        type: Sequelize.STRING,
    },
    aadharNumber: {
        type: Sequelize.STRING,
    },
    aadharCard: {
        type: Sequelize.STRING,
    },
    religion: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
  });
  return Partner;
};

module.exports = (sequelize, Sequelize) => {
  const EnquiryCosting = sequelize.define("enquiryCosting", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    installation: {
      type: Sequelize.STRING,
    },
    survey: {
      type: Sequelize.STRING,
    },
    complaint: {
      type: Sequelize.STRING,
    },
    amc: {
      type: Sequelize.STRING,
    },
    installationRecording: {
      type: Sequelize.STRING,
    },
    liveStreaming: {
      type: Sequelize.STRING,
    },
    deepClean: {
      type: Sequelize.STRING,
    },
  });
  return EnquiryCosting;
};

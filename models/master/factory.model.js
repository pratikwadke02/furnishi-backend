module.exports = (sequelize, Sequelize) => {
    const Factory = sequelize.define("factory", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        companyName: {
            type: Sequelize.STRING,
        },
        companyAddress: {
            type: Sequelize.STRING,
        },
        contactNumber: {
            type: Sequelize.STRING,
        },
        website: {
            type: Sequelize.STRING,
        },
        gstNumber: {
            type: Sequelize.STRING,
        },
        manager: {
            type: Sequelize.STRING,
        },
        managerEmailId: {
            type: Sequelize.STRING,
        },
    })
    return Factory;
}
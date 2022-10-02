module.exports = (sequelize, Sequelize) => {
    const WorkPartner = sequelize.define("workPartner", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        partnerId: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        permanentAddress: {
            type: Sequelize.STRING,
        },
        presentAddress: {
            type: Sequelize.STRING,
        },
        firmName: {
            type: Sequelize.STRING,
        },
        contactNumber: {
            type: Sequelize.STRING,
        },
        emailId: {
            type: Sequelize.STRING,
        },
        workLocation: {
            type: Sequelize.STRING,
        },
        workPincode: {
            type: Sequelize.STRING,
        },
        aadharNumber: {
            type: Sequelize.STRING,
        },
        teams: {
            type: Sequelize.STRING,
        },
        aadharAttachment: {
            type: Sequelize.STRING,
        },
        religion: {
            type: Sequelize.STRING,
        },
    })
    return WorkPartner;
}
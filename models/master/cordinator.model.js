module.exports = (sequelize, Sequelize) => {
    const Cordinator = sequelize.define("cordinator", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cordinatorCode: {
            type: Sequelize.STRING,
        },
        sourceCode: {
            type: Sequelize.STRING,
        },
        source: {
            type: Sequelize.STRING,
        },
        firmName: {
            type: Sequelize.STRING,
        },
        firmAddress: {
            type: Sequelize.STRING,
        },
        cordinatorType: {
            type: Sequelize.STRING,
        },
        cordinatorName: {
            type: Sequelize.STRING,
        },
        cordinatorNumber: {
            type: Sequelize.STRING,
        },
        cordinatorEmailID: {
            type: Sequelize.STRING,
        },
    })
    return Cordinator;
}
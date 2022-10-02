module.exports = (sequelize, Sequelize) => {
    const Source = sequelize.define("source", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        emailId: {
            type: Sequelize.STRING,
        },
        contactNumberOne: {
            type: Sequelize.STRING,
        },
        contactNumberTwo: {
            type: Sequelize.STRING,
        },
        cordinatorName: {
            type: Sequelize.STRING,
        },
        cordinatorNumber: {
            type: Sequelize.STRING,
        },
    })
    return Source;
}
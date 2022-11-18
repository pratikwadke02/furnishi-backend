module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("history", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderNumber: {
            type: Sequelize.STRING,
        },
        updatedBy: {
            type: Sequelize.STRING,
        },
        updatedOn: {
            type: Sequelize.STRING,
        },
    })
    return History;
}
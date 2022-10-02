module.exports = (sequelize, Sequelize) => {
    const SnagAction = sequelize.define("snagAction", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        actionCode: {
            type: Sequelize.STRING,
        },
        action: {
            type: Sequelize.STRING,
        },
    })
    return SnagAction;
}
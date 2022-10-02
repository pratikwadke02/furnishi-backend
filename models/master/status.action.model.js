module.exports = (sequelize, Sequelize) => {
    const StatusAction = sequelize.define("statusAction", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        statusActionCode: {
            type: Sequelize.STRING,
        },
        statusAction: {
            type: Sequelize.STRING,
        },
    })
    return StatusAction;
}
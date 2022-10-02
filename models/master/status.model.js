module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("status", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        statusCode: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
    })
    return Status;
}
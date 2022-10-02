module.exports = (sequelize, Sequelize) => {
    const CordinatorType = sequelize.define("cordinatorType", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cordinatorTypeCode: {
            type: Sequelize.STRING,
        },
        cordinatorType: {
            type: Sequelize.STRING,
        },
    })
    return CordinatorType;
}
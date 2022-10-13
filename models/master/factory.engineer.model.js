module.exports = (sequelize, Sequelize) => {
    const FactoryEngineer = sequelize.define("factoryEngineer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        factoryEngineerCode: {
            type: Sequelize.STRING,
        },
        factoryEngineer: {
            type: Sequelize.STRING,
        },
    })
    return FactoryEngineer;
}
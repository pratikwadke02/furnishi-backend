module.exports = (sequelize, Sequelize) => {
    const Planner = sequelize.define("planner", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        plannerCode: {
            type: Sequelize.STRING,
        },
        planner: {
            type: Sequelize.STRING,
        },
    })
    return Planner;
}
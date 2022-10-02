module.exports = (sequelize, Sequelize) => {
    const SnagCost = sequelize.define("snagCost", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        costCode: {
            type: Sequelize.STRING,
        },
        cost: {
            type: Sequelize.STRING,
        },
    })
    return SnagCost;
}
module.exports = (sequelize, Sequelize) => {
    const Carcass = sequelize.define("carcass", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        carcassCode: {
            type: Sequelize.STRING,
        },
        carcass: {
            type: Sequelize.STRING,
        },
    })
    return Carcass;
}
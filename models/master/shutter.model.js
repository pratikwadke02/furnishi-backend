module.exports = (sequelize, Sequelize) => {
    const Shutter = sequelize.define("shutter", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        shutterCode: {
            type: Sequelize.STRING,
        },
        shutter: {
            type: Sequelize.STRING,
        },
    })
    return Shutter;
}
module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pincode: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
    })
    return Location;
};
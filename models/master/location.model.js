module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        locationPincode: {
            type: Sequelize.STRING,
        },
        locationName: {
            type: Sequelize.STRING,
        },
    })
    return Location;
}
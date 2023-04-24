module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define("Notification", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        sendTO: {
            type: Sequelize.STRING, // Value should have "All", "Factory Manager", "Partner", "Admin"
        }
    });
    return Notification;
};

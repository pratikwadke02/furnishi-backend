module.exports = (sequelize, Sequelize) => {
    const Panel = sequelize.define("panel", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        panelCode: {
            type: Sequelize.STRING,
        },
        panel: {
            type: Sequelize.STRING,
        },
    })
    return Panel;
}
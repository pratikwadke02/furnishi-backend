module.exports = (sequelize, Sequelize) => {
    const Designer = sequelize.define("designer", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        designerCode: {
            type: Sequelize.STRING,
        },
        designer: {
            type: Sequelize.STRING,
        },
    })
    return Designer;
}
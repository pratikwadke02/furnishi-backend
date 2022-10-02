module.exports = (sequelize, Sequelize) => {
    const WorkType = sequelize.define("workType", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        workTypeCode: {
            type: Sequelize.STRING,
        },
        workType: {
            type: Sequelize.STRING,
        },
    })
    return WorkType;
}
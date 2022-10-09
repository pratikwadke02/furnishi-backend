module.exports = (sequelize, Sequelize) => {
    const FinalSiteSurveyor = sequelize.define("finalSiteSurveyor", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        finalSiteSurveyorCode: {
            type: Sequelize.STRING,
        },
        finalSiteSurveyor: {
            type: Sequelize.STRING,
        },
    })
    return FinalSiteSurveyor;
}
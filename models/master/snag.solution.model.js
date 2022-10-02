module.exports = (sequelize, Sequelize) => {
    const SnagSolution = sequelize.define("snagSolution", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        solutionCode: {
            type: Sequelize.STRING,
        },
        solution: {
            type: Sequelize.STRING,
        },
    })
    return SnagSolution;
}
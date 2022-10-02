module.exports = (sequelize, Sequelize) => {
    const SnagIssue = sequelize.define("snagIssue", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        issueCode: {
            type: Sequelize.STRING,
        },
        issue: {
            type: Sequelize.STRING,
        },
    })
    return SnagIssue;
}
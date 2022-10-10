module.exports = (sequelize, Sequelize) => {
    const SalesPerson = sequelize.define("salesPerson", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        salesPersonCode: {
            type: Sequelize.STRING,
        },
        salesPerson: {
            type: Sequelize.STRING,
        },
    })
    return SalesPerson;
}
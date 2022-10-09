module.exports = (sequelize, Sequelize) => {
    const SalesPerson = sequelize.define("salesPerson", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        salesPersonCoe: {
            type: Sequelize.STRING,
        },
        salesPerson: {
            type: Sequelize.STRING,
        },
    })
    return SalesPerson;
}
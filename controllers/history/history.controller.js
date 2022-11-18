const db = require('../../models');
const History = db.history;

exports.findAll = async (req, res) => {
    try {
        await History.findAll().then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving History."
        });
    }
}



const db = require('../../models');
const SnagSolution = db.snagSolution;

exports.create = async (req, res) => {
    try {
        var solutionCode;
        const snagSolutions = await SnagSolution.findAll();
        if (snagSolutions.length == 0) {
            solutionCode = "SS100500";
        }
        else {
            var lastSnagSolution = snagSolutions[snagSolutions.length - 1];
            var lastDigits = lastSnagSolution.solutionCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            solutionCode = "SS" + incrementedDigits;
        }
        await SnagSolution.create({
            solutionCode: solutionCode,
            solution: req.body.solution,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Snag Solution."
            });
        }
        );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const snagSolutions = await SnagSolution.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(snagSolutions);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}


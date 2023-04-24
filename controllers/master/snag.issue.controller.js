const db = require('../../models');
const SnagIssue = db.snagIssue;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var issueCode;
        const snagIssues = await SnagIssue.findAll();
        if (snagIssues.length == 0) {
            issueCode = "SI100500";
        }
        else {
            var lastSnagIssue = snagIssues[snagIssues.length - 1];
            var lastDigits = lastSnagIssue.issueCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            issueCode = "SI" + incrementedDigits;
        }
        await SnagIssue.create({
            issueCode: issueCode,
            issue: req.body.issue,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Snag Issue."
            });
        }
        );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const snagIssues = await SnagIssue.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(snagIssues);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteSnagIssue = async (req, res) => {
    try {
        const userId = req.user.id;
        const snagIssueId = req.params.id;
        const snagIssue = await SnagIssue.findOne({ where: { [Op.and]: [{ id: snagIssueId }, { user_id: userId }] } });
        if (!snagIssue) {
            return res.status(400).send({ message: "Snag Issue is not present!" });
        };
        await snagIssue.destroy();
        res.status(200).send({
            message: `Snag Issue deleted successfully! Id: ${snagIssueId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateSnagIssue = async (req, res) => {
    try {
        const userId = req.user.id;
        const snagIssueId = req.params.id;
        const snagIssue = await SnagIssue.findOne({ where: { [Op.and]: [{ id: snagIssueId }, { user_id: userId }] } });
        if (!snagIssue) {
            return res.status(400).send({ message: "Snag Issue is not present!" });
        };
        await snagIssue.update({
            ...snagIssue,
            issue: req.body.issue
        });
        res.status(200).send({ message: `Snag Issue modified successfully! ID: ${snagIssueId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

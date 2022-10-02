const db = require('../../models');
const SnagIssue = db.snagIssue;

exports.create = async (req, res) => {
    try{
        await SnagIssue.create(req.body);
        res.status(200).send({message: "Snag Issue created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const snagIssues = await SnagIssue.findAll();
        res.status(200).send(snagIssues);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

const informationController = {}

const Information = require('../models/Information');

informationController.getInformation = async (req, res) => {
    const information = await Information.find();
    res.json(information);
}


informationController.saveInformation = async (req, res) => {
    const newInformation = new Information(req.body);

    await newInformation.save();

    res.send({ message: 'Information saved', code: "200" });
}


informationController.editInformation = async (req, res) => {
    await Information.findByIdAndUpdate(req.params.id, req.body);

    res.send({ message: 'Information updated', code: "200" });
}

informationController.deleteInformation = async (req, res) => {
    await Information.findByIdAndDelete(req.params.id);

    res.send({ message: 'Information deleted', code: "200" });
}

module.exports = informationController;
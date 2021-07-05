const userController = {}

const User = require('../models/User');

userController.login = async (req, res) => {
    const bodyUser = req.body;
    const username = bodyUser.username;
    const user = await User.findOne({ username });
    if (user && user.password === bodyUser.password) {
        res.send({
            message: 'OK',
            code: '200'
        });
    } else {
        res.send({
            message: 'Forbidden',
            code: '403'
        });
    }
}

userController.registerUser = async (req, res) => {
    const newUser = new User(req.body);

    await newUser.save(function (err) {
        if (err) {
            res.send({
                message: err,
                code: '500'
            });
        } else {
            res.send({
                message: 'User saved',
                code: '200'
            });
        }
    });
}

userController.getUserByUsername = async (req, res) => {
    const user = await User.find({}, ['fullName', 'email', 'username', 'userType']).where('username').equals(req.params.username);

    res.json(user);
}

module.exports = userController;
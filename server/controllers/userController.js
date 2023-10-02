// controllers/userController.js
const UserModel = require('../models/Users');

exports.getAllUsers = (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
};

exports.createUser = (req, res) => {
    UserModel.create(req.body)
        .then(users => {
            console.log(users)
            res.json(users)})
        .catch(err => res.json(err));
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err));
};

exports.updateUserById = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(
        { _id: id },
        {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
        .then(users => res.json(users))
        .catch(err => res.json(err));
};

exports.deleteUserById = (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
};

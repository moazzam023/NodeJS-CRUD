const { User } = require("../models/user");

async function handleGetUser(req, res) {
    const results = await User.find({});
    return res.send(results);
}
async function handleCreateUser(req, res) {
    try {
        const body = req.body;
        const results = await User.create({
            name: body.name,
            email: body.email,
            gender: body.gender,
            age: body.age,
            jobTitle: body.jobTitle
        })
        res.status(201).send({ "status": "success", id: results._id })

    } catch (err) {
        if (err.code === 11000) {
            // Duplicate key error code
            console.error('Error: Duplicate email');
            res.status(409).send('Email already exits.');
        } else {
            res.send(err);
        }
    }
}
async function handleGetUserById(req, res) {
    const id = req.params.id;
    console.log('id--', id);
    const result = await User.findById(id);
    return res.send(result);
}

async function handleUpdateUserById(req, res) {
    const id = req.params.id;
    const body = req.body;
    const result = await User.updateOne(User.findById(id), body);
    return res.send({msg: 'Update successful'});
}

async function handleDeleteUserById(req, res) {
    const id = req.params.id;
    await User.deleteOne(User.findById(id));
    return res.send({ "status": "Deleted Successfully" });
}

module.exports = {
    handleGetUser,
    handleCreateUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById
}
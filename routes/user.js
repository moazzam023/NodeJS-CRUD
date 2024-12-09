const express = require('express');
const { handleCreateUser, handleGetUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById } = require('../controllers/user');
const userRoutes = express.Router();

userRoutes.route('/').get(handleGetUser).post(handleCreateUser);
userRoutes.route('/:id').get(handleGetUserById).patch(handleUpdateUserById).delete(handleDeleteUserById);

module.exports = {
    userRoutes
}
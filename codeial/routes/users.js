const express = require('express');
const app = express.Router();

const userController = require('../controllers/user_controller');

app.get('/profile', userController.profile);
app.get('/sign-up', userController.signUp);
app.get('/sign-in', userController.singIn);

app.post('/create', userController.create);

module.exports = app;
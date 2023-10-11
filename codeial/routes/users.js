const express = require('express');
const app = express.Router();

const userController = require('../controllers/user_controller');

app.get('/profile', userController.profile);

module.exports = app;
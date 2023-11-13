
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/add-user', userController.addUser);

router.delete('/delete-user/:userId', userController.deleteUser);

router.get('/get-users', userController.getUser);

module.exports = router;    

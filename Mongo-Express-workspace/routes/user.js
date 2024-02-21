const express = require('express');

const router = express.Router();
const userController = require('../controller/userController');
console.log('user.js');

router.get('/profile',userController.dataStore);


module.exports = router;
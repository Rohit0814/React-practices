const express = require('express');

const router = express.Router();
const userController = require('../controller/userController');
console.log('user.js');

router.get('/profile',userController.userView);
router.post('/save',userController.dataSave);


module.exports = router;
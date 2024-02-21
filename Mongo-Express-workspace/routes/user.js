const express = require('express');

const router = express.Router();
const userController = require('../controller/userController');
console.log('user.js');

router.get('/profile',userController.userView);
router.post('/save',userController.dataSave);
router.get('/display',userController.loadData);
router.post('/search',userController.searchData);


module.exports = router;
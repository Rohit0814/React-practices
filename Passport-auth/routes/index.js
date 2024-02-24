const express = require('express');
const router = express.Router();
const userController= require('../controller/UserController');

router.get('/',userController.home);

router.use('/users',require('./users'));
// console.log(router);
module.exports=router;
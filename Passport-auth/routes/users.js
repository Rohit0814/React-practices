const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');

router.get('/signup',userController.sign_up);
router.get('/login',userController.log_in);
router.post('/data-save',userController.data_save);

module.exports=router;
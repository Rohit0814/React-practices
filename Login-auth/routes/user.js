const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/signup',userController.sign_up);
router.get('/login',userController.log_in);
router.post('/data-save',userController.save_user);
router.post('/dashboard',userController.auth_user);

module.exports=router;
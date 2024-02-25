const express = require('express');
const router = express.Router();
// const passport = require('passport');

const userController = require('../controller/UserController');
const passport = require('passport');

router.get('/signup',userController.sign_up);
router.get('/login',userController.log_in);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect : '/users/signup'}
),userController.create_session);
router.get('/dashboard',passport.checkAuthentication,userController.dashboard)
router.post('/data-save',userController.data_save);

module.exports=router;
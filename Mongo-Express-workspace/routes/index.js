const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');

router.get('/',homeController.home_controller);
router.use('/users',require('./user'));

module.exports = router;
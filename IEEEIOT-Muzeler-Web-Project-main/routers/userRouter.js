const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

//router.get('/', userController.deneme)

router.get('/', userController.deneme)



module.exports = router
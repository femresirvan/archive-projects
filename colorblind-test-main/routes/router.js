const express = require('express').Router;
const router = express();
const homepageController = require('../controllers/homepageController');
const simulationController = require('../controllers/simulationController');

router.get('/',homepageController);
router.get('/simulation',simulationController);

module.exports = router;
const { Router } = require('express');

const router = Router();

const informationController = require('../controllers/information.controller');

router.get('/',informationController.getInformation);

module.exports = router;
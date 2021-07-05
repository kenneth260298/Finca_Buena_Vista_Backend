const { Router } = require('express');

const router = Router();

const lodgingController = require('../controllers/lodging.controller');

router.get('/basicInformation', lodgingController.getBasicInformation);

router.get('/:internal_name', lodgingController.getLodgingByInternalName);

router.post('/', lodgingController.saveInformation);

router.put('/:id', lodgingController.editInformation);

router.post('/sendEmail', lodgingController.sendEmail);


module.exports = router;
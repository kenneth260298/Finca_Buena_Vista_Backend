const { Router } = require('express');

const router = Router();

const userController = require('../controllers/user.controller');

router.post('/', userController.registerUser);

router.post('/login', userController.login);

router.get('/:username', userController.getUserByUsername);

module.exports = router;
const { Router } = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const router = Router();

router.get('/:userId', authController.authenticate, userController.getUser);

module.exports = router;

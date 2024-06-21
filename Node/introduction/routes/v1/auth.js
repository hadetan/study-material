const { signupController, loginController } = require('../../controllers/auth.controller');

const router = require('express').Router();

router.post('/login', loginController)
router.post('/signup', signupController)

module.exports = router;
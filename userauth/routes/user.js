const express = require('express');
const passport = require('passport');
const { user_register, user_login, get_users } = require('../controllers/user');
const router = express.Router();
require('../config/passport')(passport)

router.post('/auth/signup', passport.authenticate('local-signup', { session: false }), user_register);
router.post('/auth/signin', passport.authenticate('local-login', { session: false }), user_login);
router.get('/get-users', passport.authenticate('jwt', { session: false }), get_users);

module.exports = router;
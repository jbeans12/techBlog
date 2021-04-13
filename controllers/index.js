const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

const apiRoutes = require('./api');

const signup = require('./signup');

const login = require('./login');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use('/signup', signup);

router.use('/login', login);


//need to connect  all routes here (login/signup/api folder)
module.exports = router;
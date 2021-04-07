const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

const apiRoutes = require('./api');

router.use('/', homeRoutes);

router.use('./api', apiRoutes);


//need to connect  all routes here (login/signup/api folder)
module.exports = router;
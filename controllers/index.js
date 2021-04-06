const router = require('express').Router();
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);


//need to connect  all routes here (login/signup/api folder)
module.exports = router;
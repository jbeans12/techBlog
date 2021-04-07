const router = require('express').Router();

const { Users } = require('../models')



router.get('/', async (req, res) => {

  res.render('homepage');
});

//need to use get/post routes for signup/logout, submissions(blog posts)
module.exports = router;
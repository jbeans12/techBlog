const router = require('express').Router();

router.get('/', async (req, res) => {

  res.render('homepage');
});

//need to use get/post routes for signup/logout, submissions(blog posts)
module.exports = router;
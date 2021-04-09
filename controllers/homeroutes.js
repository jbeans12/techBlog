const router = require('express').Router();

const { Users, Post } = require('../models')

const withAuth = require('../utils/auth')


//routes start here
router.get('/', async (req, res) => {
  res.render('homepage');
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
      });
  } else {
      res.status(404).end();
  }  
});

router.get('/signup', (req,res) => {
  res.render('signup')
});

//add profile routes next
router.get('/profile', withAuth, async (req, res) => {
  try {
      const profileData = await Users.findByPk(req.session.user_id, {
          include: [{ model: Post}]
        });
      const profile = profileData.get({ plain: true });

      console.log(profile)
      res.render('profile',  profile );
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }

});

//add post routes next
router.get('/post', async (req, res) => {
  try {
      const postData = await Post.findAll();
      const post = postData.map((post) => post.get({ plain: true }));
      res.render('dashboard', { post });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
      const postData = await Post.findByPk(req.params.id);
      const post = postData.get({ plain: true });
      res.render('dashboard', post );
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.post('/api/post', async (req, res) => {
  try {
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
  } catch (err) {
      res.status(400).json(err)
  }

});

// router.get('/dashboard', async )


module.exports = router;



// res.render('homepage', {
//   galleries,
//   loggedIn: req.session.loggedIn,
// });
// } catch (err) {
// console.log(err);
// res.status(500).json(err);
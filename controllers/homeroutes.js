const router = require('express').Router();

// const { Users } = require()

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

//add post routes next


module.exports = router;



// res.render('homepage', {
//   galleries,
//   loggedIn: req.session.loggedIn,
// });
// } catch (err) {
// console.log(err);
// res.status(500).json(err);
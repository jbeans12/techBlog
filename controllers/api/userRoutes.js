//create user
const router = require('express').Router();

const { Users } = require('../../models')

router.get('/', async (req, res) => {
  const userData = await Users.findAll()
  res.json(userData) 
})


router.post('/', async (req, res) => {
    console.log("jenn")
    Users.create(req.body)
    .then(response => {
      req.session.save(() => {
        req.session.user_id = response.id;
        req.session.logged_in = true;
        console.log(response.id)
        res.status(200).json(response) 
      })
      }).catch (err => {
        console.log(err)
        res.status(400).json(err);
    });
});


router.post('/login', async (req, res) => {
try {
  console.log(req.body)

  const userData = await Users.findOne({ where: { email: req.body.email } });
  console.log(userData)
  if (!userData) {
    res.status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }
  const validPassword = await userData.checkPassword(req.body.password);
  if (!validPassword) {
    res.status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }
  req.session.save(() => {                         
    req.session.user_id = userData.id;
    req.session.logged_in = true;
    res.json({ user: userData, message: 'You are logged in!' });
  });
} catch (err) {
  res.status(400).json(err);
}
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


module.exports = router
const router = require('express').Router();
//grabs our Users model
const { Users } = require('../models')

//renders our signup page
router.get('/signup', async (req, res) => {
    res.render('signup')
})

router.get('/users', async (req, res) => {
    try {
        const userData = await Users.findAll();
        const user = userData.map((users) => users.get({ plain: true }));
        res.render('users', { user });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
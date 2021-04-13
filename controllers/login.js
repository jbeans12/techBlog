const router = require('express').Router();
const { Users } = require('../models')


router.get('/login', async (req, res) => {
    res.render('login')
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
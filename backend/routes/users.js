const router = require('express').Router();
let User = require('../models/user.model');

// First endpoint that handle the incoming http get requests
// on the /user url path
router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Second endpoint handle the incoming http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

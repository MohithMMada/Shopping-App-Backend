const express = require('express');
const router = express.Router();
const UserCreds = require('../models/userCreds');

router.post('/userProfile', (req, res) => {
  const { customerName, username, password, gender, preferredCategory } = req.body;

  UserCreds.findOne({ username })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      const newUser = new UserCreds({
        customerName,
        username,
        password,
        gender,
        preferredCategory,
      });

      return newUser.save();
    })
    .then(() => {
      res.json({ message: 'User profile logged successfully' });
    })
    .catch(error => {
      console.error('Error logging user profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;

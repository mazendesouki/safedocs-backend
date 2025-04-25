const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Test Route
router.get('/test', (req, res) => {
  res.json({ message: 'API شغال تمام!' });
});

router.post('/register', register);
router.post('/login', login);


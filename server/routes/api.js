const express = require('express');
const router = express.Router();
const path = require('path');

/* GET api listing. */
router.get('/', (req, res) => {
	console.log('register');
  	res.redirect('/register');
});

router.get('/register', (req, res) => {
	console.log('register');
  	res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

router.get('/login', (req, res) => {
	console.log('login');
  	res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;
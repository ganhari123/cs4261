const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('express-jwt');

const authCheck = jwt({
  secret: new Buffer('YwIOdkFKEeQPkCjZFfav2pem5fvZNYx-7sRQCVFTGnl-RtawFrRZrlZTn1PsWXZk', 'base64'),
  audience: 'dQzdgrkYYOzCluDmLycWpI6FN2P6ZEi4'
});

/* GET api listing. */
router.get('/', (req, res) => {
	console.log('register');
  	res.redirect('/register');
});

router.get('/register', (req, res) => {
	console.log('register');
	var response = {a: "register", b: "Hi"};
  	res.json(response);
});

router.get('/login', (req, res) => {
	console.log('login');
	var response = {a: "logiewfn", b: "Hi"};
  	res.json(response);
});

router.get('')

module.exports = router;
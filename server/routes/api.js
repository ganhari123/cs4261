const express = require('express');
const router = express.Router();
const path = require('path');

/* GET api listing. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

module.exports = router;
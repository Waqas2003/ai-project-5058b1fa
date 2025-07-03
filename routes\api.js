const express = require('express');
const router = express.Router();

router.get('/greeting', (req, res) => {
  res.send('Hello from API!');
});

module.exports = router;
const express = require('express');

const router = express.Router();

const mock = require('../mock/cars.json');

router.get('/', async (req, res) => {
  res.send(mock);
});

module.exports = router;

const express = require('express');

const { find, pick } = require('lodash');

const router = express.Router();

const mock = require('../mock/availability.json');

router.get('/', async (req, res) => {
  const id = Number(req.query.id);

  const available = pick(find(mock, { id }), ['available']);

  // return 404 if not found
  if (!available) res.status(404).send({});
  // otherwise
  res.send(available);
});

module.exports = router;

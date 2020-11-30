const router = require('express').Router;

const polls = require('./polls');

router.use('/polls', polls);

module.exports = router;

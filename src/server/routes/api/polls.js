const router = require('express').Router;

const {
  getAllPolls,
  getPoll,
  createPoll,
  deletePoll,
  updatePoll,
} = require('../../controllers/polls.js');

router.get('/', getAllPolls);
router.get('/:id', getPoll);
router.post('/', createPoll);
router.delete('/:id', deletePoll);
router.put('/:id', updatePoll);

module.exports = router;

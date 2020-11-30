import express from 'express';
const router = express.Router();

import {
  getAllPolls,
  getPoll,
  createPoll,
  deletePoll,
  updatePoll,
} from '../../controllers/polls.js';

router.get('/', getAllPolls);
router.get('/:id', getPoll);
router.post('/', createPoll);
router.delete('/:id', deletePoll);
router.put('/:id', updatePoll);

export default router;

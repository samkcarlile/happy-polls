import express from 'express';
const router = express.Router();

import polls from './polls.js';

router.use('/polls', polls);

export default router;

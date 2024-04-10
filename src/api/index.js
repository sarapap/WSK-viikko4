import express from 'express';
import catRouter from './routes/router.js';
import 'dotenv';

const router = express.Router();

router.use('/cats', catRouter);

export default router;
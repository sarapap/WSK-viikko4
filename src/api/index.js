import express from 'express';
import catRouter from './routes/router.js';
import userRouter from './routes/user-router.js';
import authRouter from './routes/auth-router.js';
import 'dotenv';

const router = express.Router();

router.use('/cats', catRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
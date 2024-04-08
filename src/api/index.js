import express from 'express';
import catRouter from './routes/router.js';

const router = express.Router();

router.use('/cats', catRouter);


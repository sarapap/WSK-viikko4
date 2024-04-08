import express from 'express';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/controller.js';

const catRouter = express.Router();

catRouter.route('/').get(getCat).post(postCat);

export default catRouter;
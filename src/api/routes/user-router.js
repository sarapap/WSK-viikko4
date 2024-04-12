import express from 'express';
import {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

const userRouter = express.Router();
userRouter.route('/')
    .get(getUser)
    .post(
        body('email').trim().isEmail(),
        body('username').trim().isLength({ min: 3, max: 20 }).isAlphanumeric(),
        body('password').trim().isLength({ min: 8 }),
        validationErrors,
        postUser);

userRouter.route('/:id').get(getUserById).put(putUser).delete(deleteUser);

export default userRouter;
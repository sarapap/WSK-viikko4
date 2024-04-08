import express from 'express';
import {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

const userRouter = express.Router();

userRouter.get('/', getUser);

userRouter.get('/:id', getUserById);

userRouter.post('/', postUser);

userRouter.put('/:id', (req, res) => {
    res.json({ message: 'User updated.' });
}, putUser);

userRouter.delete('/:id', (req, res) => {
    res.json({ message: 'User deleted.' });
}), deleteUser;

export default userRouter;
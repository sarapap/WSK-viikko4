import { listAllUsers, findUserById, addUser, updateUser, removeUser } from '../models/user-model.js';
import bcrypt from 'bcrypt';

const getUser = async (req, res) => {
    const users = res.json(await listAllUsers());
    if (!users) {
        res.sendStatus(404);
        return;
    }
    res.json(users);
};

const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const postUser = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const result = await addUser(req.body);
    if (!result) {
        const error = new Error('Invalid or missing fields.');
        error.status = 400;
        next(error);
        return;
    }
    res.status(201);
    res.json(result);
};

const putUser = async (req, res) => {
    if (
        res.locals.user.user_id !== Number(req.params.id) &&
        res.locals.user.role !== 'admin'
    ) {
        res.sendStatus(403);
        return;
    }

    const result = await modifyUser(req.body, req.params.id, res.locals.user);
    if (!result) {
        res.sendStatus(400);
        return;
    }
    res.json(result);
};

const deleteUser = async (req, res) => {
    if (
        res.locals.user.user_id !== Number(req.params.id) &&
        res.locals.user.role !== 'admin'
    ) {
        res.sendStatus(403);
        return;
    }
    const result = await removeUser(req.params.id);
    if (!result) {
        res.sendStatus(400);
        return;
    }
    res.json(result);
};

export { getUser, getUserById, postUser, putUser, deleteUser };
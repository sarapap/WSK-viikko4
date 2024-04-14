import { listAllUsers, findUserById, addUser } from '../models/user-model.js';

const getUser = (req, res) => {
    res.json(listAllUsers());
};

const getUserById = (req, res) => {
    const user = findUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const postUser = (req, res) => {
    const result = addUser(req.body);
    if (result.user_id) {
        res.status(201);
        res.json({ message: 'New user added.', result });
    } else {
        res.sendStatus(400);
    }
};

const putUser = async (req, res) => {
    const result = await modifyUser(req.body, req.params.id, res.locals.user);
    if (!result) {
        res.sendStatus(404);
        return;
    }
    res.json({ message: 'User item updated.', result: result });
};

const deleteUser = async (req, res) => {
    const result = await removeUser(req.params.id, res.locals.user);
    if (!result) {
        res.sendStatus(404);
        return;
    }
    res.json({ message: 'User item deleted.', result: result });
};

export { getUser, getUserById, postUser, putUser, deleteUser };
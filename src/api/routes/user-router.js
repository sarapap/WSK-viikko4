const userItems = [
    {
        user_id: 3609,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 3610,
        name: 'Sara',
        username: 'sarapap',
        email: 'sarapap@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 3611,
        name: 'Heidi',
        username: 'heidipap',
        email: 'heidipap@metropolia.fi',
        role: 'user',
        password: 'password',
    },
];

const listAllUsers = () => {
    return userItems;
};

const findUserById = (id) => {
    return userItems.find((item) => item.user_id == id);
};

const addUser = (user) => {
    const { name, username, email, role, password } = user;
    const newId = userItems[0].user_id + 1;
    userItems.unshift({ user_id: newId, name, username, email, role, password });
    return { user_id: newId };
};

export { listAllUsers, findUserById, addUser };
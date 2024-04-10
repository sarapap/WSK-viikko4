import { addCat, findCatById, listAllCats } from "../models/model.js";

const getCat = async (req, res) => {
    res.json(await listAllCats());
};

const getCatById = async (req, res) => {
    const cat = await findCatById(req.params.id);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
};

const postCat = async (req, res) => {
    console.log('postCat', req.body);
    console.log('File', req.file);

    const result = await addCat(req.body, req.file);
    if (result.cat_id) {
        res.status(201);
        res.json({ message: 'New cat added.', result });
    } else {
        res.sendStatus(400);
    }
};

const putCat = (req, res) => {
    res.sendStatus(200);
};

const deleteCat = (req, res) => {
    res.sendStatus(200);
};

export { getCat, getCatById, postCat, putCat, deleteCat };
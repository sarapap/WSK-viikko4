import { addCat, findCatById, listAllCats } from "../models/model.js";

const getCat = (req, res) => {
    res.json(listAllCats());
};

const getCatById = (req, res) => {
    const cat = findCatById(req.params.id);
    if (cat) {
        res.json(cat);
    } else {
        res.sendStatus(404);
    }
};

const postCat = (req, res) => {
    console.log('postCat', req.body);
    console.log('File', req.file);

    const result = addCat(req.body, req.file);
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
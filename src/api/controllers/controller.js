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
    console.log('Form Data:', req.body);
    console.log('File Data:', req.file);

    const filename = req.file.filename;
    addCat({ image: filename });

    res.status(201).json({ message: 'Cat added successfully.', filename });
};

const putCat = (req, res) => {
    res.sendStatus(200);
};

const deleteCat = (req, res) => {
    res.sendStatus(200);
};

export { getCat, getCatById, postCat, putCat, deleteCat };
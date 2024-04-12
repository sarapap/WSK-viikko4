import express from 'express';
import multer from 'multer';
import {
    getCat,
    getCatById,
    postCat,
    putCat,
    deleteCat,
} from '../controllers/controller.js';
import { authenticateToken, createThumbnail } from '../../middlewares.js';

const catRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const suffix = `${Date.now()} '-' ${Math.round(Math.random() * 1E9)}`
        const prefix = `${file.originalname.split('.')[0].toLowerCase()}-${file.fieldname}`
        let extension = 'jpg'

        if (file.mimetype === 'image/png') {
            extension = 'png'
        }

        console.log("file in storage", file)
        const filename = `${prefix}-${suffix}.${extension}`
        cb(null, filename)
    }
});

//storage destination overwrites
const upload = multer({ //dest: 'uploads/', 
    storage
    , fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
            cb(null, true);
        } else {
            cb(new Error('Only images and videos are allowed!'));
        }
    }
});


catRouter.route('/')
    .get(getCat)
    .post(authenticateToken, upload.single('file'),
        createThumbnail,
        postCat
    );

catRouter.route('/:id')
    .get(getCatById)
    .put(authenticateToken, putCat)
    .delete(authenticateToken, deleteCat);

export default catRouter;
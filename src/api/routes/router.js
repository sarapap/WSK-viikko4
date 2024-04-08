import express from 'express';
import multer from 'multer';
import { postCat } from '../controllers/cat-controller.js';

const catRouter = express.Router();

// Set up Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route for posting a new cat with file upload
catRouter.post('/', upload.single('catImage'), postCat);

export default catRouter;

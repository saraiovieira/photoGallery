import express from 'express';
import { gallery } from '../controllers/gallery.js';
import { isAuth } from '../middleware/auth.js'
import { uploadPath, uploadFile } from '../controllers/upload.js';
import { imageUpload } from '../middleware/upload.js';
import { register } from '../controllers/register.js';
import { getLogin, login } from '../controllers/login.js';


const router = express.Router();


router.get('/', gallery)

router.get('/upload', isAuth, uploadPath);

router.get('/login', getLogin);
    
router.post('/upload', imageUpload.single('image') , uploadFile);

router.post('/register', register);

router.post('/login', login);


export default router;



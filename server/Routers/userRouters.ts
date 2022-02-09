import express from 'express';
import userController from '../controller/userController';
import { userSchema } from '../schemas/userSchema';
import { validator } from '../utils/middleware/validator';

const router = express.Router();

router.post('/register', userController.register);
// router.post('/register', [validator(userSchema)], userController.register);
router.post('/login', userController.login);
router.get('/auth', userController.check);

export default router;

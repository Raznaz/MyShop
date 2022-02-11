import express from 'express';
import userController from '../controller/userController';
import { userSchema } from '../schemas/userSchema';
import { auth } from '../utils/middleware/authMiddleware';
import { validator } from '../utils/middleware/validator';

const router = express.Router();

// router.post('/register', userController.register);
router.post('/register', [validator(userSchema)], userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/auth', [auth], userController.check);
router.get('/users', [auth], userController.users);

export default router;

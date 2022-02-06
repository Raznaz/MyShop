import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.post('/register', userController.register);
router.get('/login', userController.login);
router.get('/auth', userController.check);

export default router;

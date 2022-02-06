import express from 'express';
import userController from '../controller/userController';

const router = express.Router();

router.get('/', userController.getUser);

export default router;

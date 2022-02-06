import express from 'express';
import typeController from '../controller/typeController';

const router = express.Router();

router.get('/', typeController.getType);

export default router;

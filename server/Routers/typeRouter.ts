import express from 'express';
import typeController from '../controller/typeController';

const router = express.Router();

router.post('/', typeController.create);
router.get('/', typeController.getAll);
router.delete('/', typeController.delete);

export default router;

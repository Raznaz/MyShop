import express from 'express';
import deviceController from '../controller/deviceController';

const router = express.Router();

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.delete('/:id', deviceController.delete);

export default router;

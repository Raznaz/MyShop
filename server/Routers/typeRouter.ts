import express from 'express';
import typeController from '../controller/typeController';
import { typeSchema } from '../schemas/typeSchema';
import { validator } from '../utils/middleware/validator';

const router = express.Router();

router.post('/', [validator(typeSchema)], typeController.create);
router.get('/', typeController.getAll);
router.delete('/', typeController.delete);

export default router;

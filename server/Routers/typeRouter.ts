import express from 'express';
import typeController from '../controller/typeController';
import { typeSchema } from '../schemas/typeSchema';
import { checkRoleMiddleware } from '../utils/middleware/checkRoleMiddleware';
import { validator } from '../utils/middleware/validator';

const router = express.Router();

router.post(
  '/',
  [validator(typeSchema), checkRoleMiddleware('admin')],
  [checkRoleMiddleware('admin')],
  typeController.create
);
router.get('/', typeController.getAll);
router.delete('/:id', typeController.delete);

export default router;

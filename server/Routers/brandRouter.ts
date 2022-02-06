import express from 'express';
import brandController from '../controller/brandController';

const router = express.Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.delete('/:id', brandController.delete);

export default router;

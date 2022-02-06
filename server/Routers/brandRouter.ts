import express from 'express';
import brandController from '../controller/brandController';

const router = express.Router();

router.get('/', brandController.getBrand);

export default router;

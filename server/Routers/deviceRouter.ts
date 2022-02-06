import express from 'express';
import deviceController from '../controller/deviceController';

const router = express.Router();

router.get('/', deviceController.getDevice);

export default router;

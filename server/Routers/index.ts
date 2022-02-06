import express from 'express';
import userRouter from './userRouters';
import deviceRouter from './deviceRouter';
import brandRouter from './brandRouter';
import typeRouter from './typeRouter';

const router = express.Router();

router.use('/user', userRouter);
router.use('/device', deviceRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);

export default router;

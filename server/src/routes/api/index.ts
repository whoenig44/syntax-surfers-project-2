import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { noteRouter } from './notes-routes.js';  
 

const router = Router();

router.use('/users', userRouter);
router.use('/notes', noteRouter);

export default router;

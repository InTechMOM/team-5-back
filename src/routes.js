import express from 'express'; 
import userRouter from '../src/api/users/routes/index.js'

const router = express.Router()

    router.use('/users', userRouter);    
    router.use('/videos', router);

export default router;
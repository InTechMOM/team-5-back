import express from 'express'; 
import userRouter from '../src/api/users/routes/index.js'

const router = express.Router()

    router.use('/users', userRouter);    
    // routerApi.use('/video', router);

export default router;
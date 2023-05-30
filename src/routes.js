import express from 'express'; 
import userRouter from '../src/api/users/routes/index.js'
import videoRouter from './api/videos/routes/index.js'
import qualificationsRouter from './api/qualifications/routes/index.js';

const router = express.Router()

    router.use('/users', userRouter);    
    router.use('/videos', videoRouter);
    router.use('/qualifications', qualificationsRouter);

export default router;
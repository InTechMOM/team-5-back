import express from 'express'; 
import router from '../controllers/post.js';

const routerApi = express.Router()

    routerApi.use('/user', router);    
    // routerApi.use('/video', router);

export default routerApi;
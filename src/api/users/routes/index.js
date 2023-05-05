import express from 'express'; 
import router from '../controllers/post.js';


function routerApi(app){
    app.use('/user', router);
     
}

export default routerApi;
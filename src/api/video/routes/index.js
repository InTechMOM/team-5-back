import express from 'express';
import validateVideoCreation from '../validations/index.js';
import createVideos from '../controllers/post.js';

const userRouter = express.Router();

videoRouter.post('/', validateVideoCreation, createVideos);

export default userRouter;
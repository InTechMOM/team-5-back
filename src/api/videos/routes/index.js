import express from 'express';
import validateVideoCreation from '../validations/index.js';
import createVideos from '../controllers/post.js';

const videoRouter = express.Router();

videoRouter.post('/', validateVideoCreation, createVideos);

export default videoRouter;
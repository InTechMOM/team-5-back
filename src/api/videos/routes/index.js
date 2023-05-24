import express from 'express';
import validateVideoCreation from '../validations/index.js';
import createVideos from '../controllers/post.js';
import { getVideos } from '../controllers/get.js';

const videoRouter = express.Router();

videoRouter.post('/', validateVideoCreation, createVideos);
videoRouter.get('/', getVideos);

export default videoRouter;
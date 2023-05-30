import express from 'express';
import validateQualificationCreation from '../validations/index.js';
import createQualifications from '../controllers/post.js';
import { getQualifications, getQualificationsByEmail } from '../controllers/get.js';

const qualificationsRouter = express.Router();

qualificationsRouter.post('/', validateQualificationCreation, createQualifications);
qualificationsRouter.get('/', getQualifications);
qualificationsRouter.get('/:id', getQualificationsByEmail);

export default qualificationsRouter;
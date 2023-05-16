import express from 'express'; 
import validateUserCreation from "../validations/index.js"
import createUsers from "../controllers/post.js";
import {getUsers, getUserById} from "../controllers/get.js";


const userRouter = express.Router();

userRouter.post('/', validateUserCreation, createUsers);
userRouter.get('/', getUsers); 
userRouter.get('/:id', getUserById);

export default userRouter;
// import router from '../controllers/post.js';
import routerApi from "../../../routes"
import validateUserCreation from "../validations"
import createUsers from "../controllers/post";

routerApi.post('/users', validateUserCreation, createUsers);

export default routerApi;
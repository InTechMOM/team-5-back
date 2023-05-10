import Joi from "joi";

const createUserSchema = Joi.object({
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    rol: Joi.string().required().validate(['student', 'teacher'])
});

const validateUserCreation = (body, res) => {
   const userValidate = createUserSchema.validate(body);
   if (userValidate.error){
    res.status(400).send(userValidate.error)
   }
}

export default validateUserCreation;
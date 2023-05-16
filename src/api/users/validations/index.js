import Joi from "joi";

const createUserSchema = Joi.object({
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    // rol: Joi.string().required().valid('student', 'teacher')
});

const validateUserCreation = (req, res) => {
 console.log(req.body);    
try{ 
    const userValidate = createUserSchema.validate(req.body);
   if (userValidate.error){
    res.status(400).json(userValidate.error.details)
   }
}catch(error){
 next(error)
}
}



export default validateUserCreation;
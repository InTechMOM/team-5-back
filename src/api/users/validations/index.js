import Joi from "joi";

const createUserSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().required().email(),
	rol: Joi.string().required().valid('student', 'teacher')
});

const validateUserCreation = (req, res, next) => {
	try {
		const userValidate = createUserSchema.validate(req.body);

		if (userValidate.error) {
			return res.status(400).json(userValidate.error.details)
		}

		next()
	} catch (error) {
		next(error)
	}
}



export default validateUserCreation;
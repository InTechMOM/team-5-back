import Joi from "joi";

const createQualificationSchema = Joi.object({
  emailStudent: Joi.string().required().email(),
  emailTeacher: Joi.string().required().email(),
	fullNameStudent: Joi.string().required(),
	projectName: Joi.string().required(), 
	url: Joi.string().required(),
	criticalThinking: Joi.number().valid(25,50,75,100).required(), 
  creativity: Joi.number().valid(25,50,75,100).required(),
  collaboration: Joi.number().valid(25,50,75,100).required(),
  communication: Joi.number().valid(25,50,75,100).required()	
});

const validateQualificationCreation = (req, res, next) => {
  try{
    const qualificationValidate = createQualificationSchema.validate(req.body);

		if (qualificationValidate.error) {
			return res.status(400).json(qualificationValidate.error.details)
		}

		next()
	} catch (error) {
		next(error)
	}
}



export default validateQualificationCreation;
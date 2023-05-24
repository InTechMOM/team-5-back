import Joi from "joi";

const createVideoSchema = Joi.object({
	url: Joi.string().required(), 
  tittle: Joi.string().required().max(90), 
  description: Joi.string().required().max(250), 
  liderFullName: Joi.string().required(), 
  liderEmail: Joi.string().required().email(), 
});


const validateVideoCreation = (req, res, next) => {
	try {
		const videoValidate = createVideoSchema.validate(req.body);

		if (videoValidate.error) {
			return res.status(400).json(videoValidate.error.details)
		}

		next()
	} catch (error) {
		next(error)
	}
}



export default validateVideoCreation;
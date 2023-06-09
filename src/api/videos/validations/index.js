import Joi from "joi";

const createVideoSchema = Joi.object({
	url: Joi.string().required(), 
  title: Joi.string().required().min(2).max(90), 
  description: Joi.string().required().min(5).max(250), 
  studentFullName: Joi.string().required(), 
  studentEmail: Joi.string().required().email(), 
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
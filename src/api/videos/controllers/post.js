import Video from '../../../models/videos.js';

const createVideos = async (req, res, next) => {
	//peticion para crear el usuario - usar el modelo
	try {
		const { url, tittle, description, liderFullName, liderEmail } = req.body;
    
		const creationDate = new Date().toISOString();

		const video = new Video({ url, tittle, description, liderFullName, liderEmail, creationDate });

		await video.save();

		return res.status(201).json({ message: 'Video created' });
	} catch (error) {
		next(error);
	}
};

export default createVideos;
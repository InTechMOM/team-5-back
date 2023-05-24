import Video from "../../../models/videos.js";


//Listar videos
const getVideos = async (req, res, next) => {
	try {
		const arrayVideos = await Video.find();

		return res.status(200).json({
			list: arrayVideos
		})
	} catch (error) {
		next(error);
	}
};

export {getVideos}; 
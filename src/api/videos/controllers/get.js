import Video from "../../../models/videos.js";

//Listar videos
/**
 * @openapi
 * /api/videos:
 *   get:
 *     summary: Videos list
 *     tags: [Videos]
 *     responses:
 *       '200':
 *         description: List of videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   url:
 *                     type: string
 *                     example: 'https://www.youtube.com/watch?v=2V-IYdcsoAw'
 *                   title:
 *                     type: string
 *                     example: 'El átomo'
 *                   description:
 *                     type: string
 *                     example: 'Adjunto el video del átomo'
 *                   studentFullName:
 *                     type: string
 *                     example: 'Pedro Pérez'
 *                   studentEmail:
 *                     type: string
 *                     example: pedroperez@example.com
 *                   creationDate:
 *                     type: string
 *                     format: date-time
 *                     example: '2023-05-18T12:00:00Z'
 *       '404':
 *         description: Videos not found
 */


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
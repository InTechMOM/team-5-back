import Video from '../../../models/videos.js';

/**
 * @openapi
 * /api/videos:
 *   post:
 *     summary: Create Video
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *               tittle:
 *                 type: string
 *               description:
 *                 type: string
 *               liderFullName:
 *                 type: string
 *               liderEmail:
 *                 type: string
 *             required:
 *               - url
 *               - tittle
 *               - description
 *               - liderFullName
 *               - liderEmail
 *           example:
 *             url: 'https://www.youtube.com/watch?v=2V-IYdcsoAw'
 *             tittle: 'El Átomo'
 *             description: 'Adjunto video del átomo.'
 *             liderFullName: 'Pedro Pérez'
 *             liderEmail: pedroperez@example.com
 *     responses:
 *       '201':
 *         description: User Created
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Error 
 */

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
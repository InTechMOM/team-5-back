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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               studentFullName:
 *                 type: string
 *               studentEmail:
 *                 type: string
 *             required:
 *               - url
 *               - title
 *               - description
 *               - studentFullName
 *               - studentEmail
 *           example:
 *             url: 'https://www.youtube.com/watch?v=2V-IYdcsoAw'
 *             title: 'El Átomo'
 *             description: 'Adjunto video del átomo.'
 *             studentFullName: 'Pedro Pérez'
 *             studentEmail: pedroperez@example.com
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
		const { url, title, description, studentFullName, studentEmail } = req.body;
    
		const creationDate = new Date().toISOString();

		const video = new Video({ url, title, description, studentFullName, studentEmail, creationDate });

		await video.save();

		return res.status(201).json({ message: 'Video created' });
	} catch (error) {
		next(error);
	}
};

export default createVideos;
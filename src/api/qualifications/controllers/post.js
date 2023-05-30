import Qualifications from "../../../models/qualifications.js";

 /**
 * @openapi
 * /api/qualifications:
 *   post:
 *     summary: Create Qualification
 *     tags: [Qualifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               emailStudent: 
 *                 type: string
 *               emailTeacher:
 *                 type: string
 *               fullNameStudent: 
 *                 type: string
 *               projectName: 
 *                 type: string
 *               url: 
 *                 type: string
 *               criticalThinking:
 *                 type: number
 *               creativity:
 *                 type: number
 *               collaboration:
 *                 type: number
 *               communication:
 *                 type: number
 *             required:
 *               - emailStudent 
 *               - emailTeacher
 *               - fullNameStudent 
 *               - projectName 
 *               - url
 *               - criticalThinking
 *               - creativity
 *               - collaboration
 *               - communication
 * 
 *           example:
 *             emailStudent: JuanVega@hotmail.com
 *             emailTeacher: ciencias@llcolegio.com
 *             fullNameStudent: Juan Vega
 *             projectName: El átomo
 *             url: https://www.youtube.com/watch?v=2V-IYdcsoAw
 *             criticalThinking: 75
 *             creativity: 50
 *             collaboration: 100
 *             communication: 75
 *             creationDate: 2023-05-18T12:00:00Z
 * 
 *     responses:
 *       '201':
 *         description: Qualification Created
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Error 
 */

const createQualifications = async (req, res, next) => {
	try {
		const { emailStudent, emailTeacher, fullNameStudent, projectName, url, criticalThinking, creativity, collaboration, communication } = req.body;

		const creationDate = new Date().toISOString();

		const qualification = new Qualifications({ emailStudent, emailTeacher, fullNameStudent, projectName, url, criticalThinking, creativity, collaboration, communication, creationDate });

		await qualification.save();

		return res.status(201).json({ message: 'Qualification created' });
	} catch (error) {
		next(error);
	}
};

export default createQualifications;
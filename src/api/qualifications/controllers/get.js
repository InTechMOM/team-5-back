import Qualifications from "../../../models/qualifications.js";


//Listar calificaciones
/**
 * @openapi
 * /api/qualifications:
 *  get:
 *   summary: Qualifications list
 *   tags: [Qualifications]
 *   responses:
 *     '200':
 *       description: List of qualifications
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 emailStudent: 
 *                   type: string
 *                   example: kevinsuarez@hotmail.com
 *                 emailTeacher:
 *                   type: string
 *                   example: matematicas11@coelgioll.com
 *                 fullNameStudent: 
 *                   type: string
 *                   example: Kevin Suarez
 *                 projectName: 
 *                   type: string
 *                   example: El átomo
 *                 url: 
 *                   type: string
 *                   example: https://www.youtube.com/watch?v=2V-IYdcsoAw
 *                 criticalThinking:
 *                   type: number
 *                   example: 75
 *                 creativity:
 *                   type: number
 *                   example: 25
 *                 collaboration:
 *                   type: number
 *                   example: 100
 *                 communication:
 *                   type: number
 *                   example: 50
 *                 creationDate:
 *                   type: string
 *                   format: date-time
 *                   example: '2023-05-18T12:00:00Z'
 * 
 *     '404':
 *       description: Qualifications not found
 */

const getQualifications = async (req, res, next) => {
	try {
		const arrayQualifications = await Qualifications.find();

		return res.status(200).json({
			list: arrayQualifications
		})
	} catch (error) {
		next(error);
	}
};


//buscar emailTeacher
/**
 * @openapi
 * /api/qualifications/{emailTeacher}:
 *   get:
 *     summary: Get qualifications by emailTeacher
 *     tags: [Qualifications]
 *     parameters:
 *       - name: emailTeacher
 *         in: path
 *         description: Teacher email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: projects retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: projects retrieved
 *                 data:
 *                   type: object
 *                   properties:
 *                     emailStudent: 
 *                       type: string
 *                       example: kevinsuarez@hotmail.com
 *                     emailTeacher:
 *                       type: string
 *                       example: matematicas11@coelgioll.com
 *                     fullNameStudent: 
 *                       type: string
 *                       example: Kevin Suarez
 *                     projectName: 
 *                       type: string
 *                       example: El átomo
 *                     url: 
 *                       type: string
 *                       example: https://www.youtube.com/watch?v=2V-IYdcsoAw
 *                     criticalThinking:
 *                       type: number
 *                       example: 75
 *                     creativity:
 *                       type: number
 *                       example: 25
 *                     collaboration:
 *                       type: number
 *                       example: 100
 *                     communication:
 *                       type: number
 *                       example: 50
 *                     creationDate:
 *                       type: string
 *                       format: date-time
 *                       example: '2023-05-18T12:00:00Z'
 * 
 *       '404':
 *         description: teacher without qualified projects
 */
const getQualificationsByEmail =  async (req, res) => {
    const emailTeacher = req.params.emailTeacher;
    const qualifications = await Qualifications.findOne(emailTeacher);
    
    if(!qualifications){
        return res.status(404).json(
            {
            message: "teacher without qualified projects"})
        }

	return res.status(200).json(
		{
			data: qualifications
		}
	)
};



export { getQualifications, getQualificationsByEmail };

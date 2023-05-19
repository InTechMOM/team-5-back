import User from '../../../models/users.js'


//Listar usuarios
/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get Users
 *     responses:
 *       '200':
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: Karen
 *                   lastName:
 *                     type: string
 *                     example: Echavarria
 *                   email:
 *                     type: string
 *                     example: some@example.com
 *                   rol:
 *                     type: string
 *                     enum: ['student', 'teacher']
 *                     example: student
 *                   creationDate:
 *                     type: string
 *                     format: date-time
 *                     example: '2023-05-18T12:00:00Z'
 *       '404':
 *         description: Users not found
 */

const getUsers = async (req, res, next) => {
	try {
		const arrayUsers = await User.find();

		return res.status(200).json({
			list: arrayUsers
		})
	} catch (error) {
		next(error);
	}
};


//buscar Id
/**
 * @openapi
 * /api/users/{Id}:
 *   get:
 *     summary: Get User by ID
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User retrieved
 *                 data:
 *                   type: object
 *                   properties:
 *                     firstName:
 *                       type: string
 *                       example: Karen
 *                     lastName:
 *                       type: string
 *                       example: Echavarria
 *                     email:
 *                       type: string
 *                       example: some@example.com
 *                     rol:
 *                       type: string
 *                       enum: ['student', 'teacher']
 *                       example: student
 *                     creationDate:
 *                       type: string
 *                       format: date-time
 *                       example: 2023-05-18T12:00:00Z
 *       '404':
 *         description: User not found
 */
const getUserById =  async (req, res) => {
    const id = req.params.id;
    const userId = await User.findById(id)
    
    if(!userId){
        return res.status(404).json(
            {
            message: "user not found"})
        }

	return res.status(200).json(
		{
			data: userId
		}
	)
};



export { getUsers, getUserById };


import User from '../../../models/users.js'

 /**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               rol:
 *                 type: string
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - rol
 *           example:
 *             firstName: Samuel
 *             lastName: Reyes
 *             email: some@example.com
 *             rol: Soy Docente
 *     responses:
 *       '201':
 *         description: User Created
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Error 
 */

const createUsers = async (req, res, next) => {
	//peticion para crear el usuario - usar el modelo
	try {
		const { firstName, lastName, email, rol } = req.body;

		const creationDate = new Date().toISOString();

		const user = new User({ firstName, lastName, email, rol, creationDate });

		await user.save();

		return res.status(201).json({ message: 'User created' });
	} catch (error) {
		next(error);
	}
};

export default createUsers;
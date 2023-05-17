import User from '../../../models/users.js'

/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Creation API for users
 *     parameters:
 *       - name: firstName
 *         in: formData
 *         type: string
 *         required: true
 *       - name: lastName
 *         in: formData
 *         type: string
 *         required: true
 *       - name: email
 *         in: formData
 *         type: string
 *         required: true
 *         match: /.+\@.+\..+/
 *         unique: true
 *       - name: rol
 *         in: formData
 *         type: string
 *         required: true
 *         enum: ['student', 'teacher']
 *     responses:
 *       200:
 *         description: User created
 *       400:
 *         description: Bad request
 */

const createUsers = async (req, res, next) => {
	//peticion para crear el usuario - usar el modelo
	try {
		const { firstName, lastName, email, rol } = req.body;

		const creationDate = new Date().toISOString();

		const user = new User({ firstName, lastName, email, rol, creationDate });

		await user.save();

		return res.status(201).json({ message: 'User created' });
	} catch { error } {
		next(error);
	}
};

export default createUsers;
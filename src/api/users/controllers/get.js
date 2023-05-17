import User from '../../../models/users.js'


//Listar usuarios
/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Users list
 *     responses:
 *       200:
 *         description: arrayUsers
 *         content: 
 *           application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties: 
 *                    firstName: 
 *                      type: String
 *       400:
 *         description: Bad request
 */
const getUsers = async (req, res, next) => {
	try {
		const arrayUsers = await User.find();

		return res.status(200).json({
			list: arrayUsers
		})
	} catch { error } {
		next(error);
	}
};


//buscar Id
/**
 * @openapi
 * /api/users/:id:
 *   get:
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


import User from '../../../models/users.js'

const createUsers = async (req, res, next) => {
	//peticion para crear el usuario - usar el modelo
	try {
		const { firstName, lastName, email, rol } = req.body;

		const creationDate = new Date().toISOString();

		const user = new User({ firstName, lastName, email, rol, creationDate });

		await user.save();

		return res.status(201).json({ message: 'User created' });
	} catch (error){
		next(error);
	}
};

export default createUsers;
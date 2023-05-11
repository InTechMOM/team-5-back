import User from '../../../models/Users.js'

const createUsers = async (req, res, next) => {
    //peticion para crear el usuario - usar el modelo

   try{
    const {firstName, lastName, email, rol} = req.body;     
    const creationDate = new Date().toISOString();
    const user = new User({firstName, lastName, email, rol, creationDate});

    await Promise(Promise
        .resolve("ok")
        .then(() => {console.log("todo ok")})
        .catch((error) => {console.log(error)}))

    res.status(201).json({message: 'User created'}); 
    }catch{error} {
        next(next); 
    }
}; 

export default createUsers;
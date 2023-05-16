import User from '../../../models/Users.js'


//Listar usuarios
const getUsers = async (req, res, next) => {
    try{
        const arrayUsers = await User.find();
        return res.status(200).json({
            list: arrayUsers
        })   
    }catch{error} {
        next(error); 
    }};


//buscar Id

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
    )};     



export {getUsers, getUserById}; 


import Users from "../../../models/users.js"

const createUsers = async (req, res) => {
    const body = req.body;     

    res.status(201).json({
        message: 'created',
        data: body
    }); 
};

export default createUsers;
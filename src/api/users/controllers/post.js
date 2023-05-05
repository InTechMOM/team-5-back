// schema JOI
import Joi from 'joi';
import express from 'express'; 

const router = express.Router(); 

const createUserSchema = Joi.object({
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    rol: Joi.string().required().validate(['student', 'teacher']), 
    date: Joi.date().default(Date.now),
});


router.post('/', body(createUserSchema), async (req, res) => {
    const body = req.body;     
    res.status(201).json({
        message: 'created',
        data: body
    }); 
});

export default router; 
module.exports = {createUserSchema}; 
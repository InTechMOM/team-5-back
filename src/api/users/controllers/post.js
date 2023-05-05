// schema JOI

import express from 'express'; 
const router = express.Router();

router.post('/', (req, res) => {
    const body = req.body;     
    res.status(201).json({
        message: 'created',
        data: body
    }); 
});

export default router; 
const errorHandler = (error, req, res, next) => {
    console.log(error.stack);
    res.status(500).json({
        message: EvalError.message,
        stack: error.stack,
    }); 
};

export default errorHandler; 
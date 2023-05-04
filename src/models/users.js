const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required:true
    }, 
    lastName: {
        type: String, 
        required:true
    }, 
    email: {
        type: String, 
        required: true, 
        match: /.+\@.+\..+/, 
        unique: true
    },
    rol: {
        type: String, 
        required:true,
        enum: ['student', 'teacher']
    },
    creationDate: {
        type: Date, 
        default: Date.now()},  
}); 

module.exports = mongoose.model('User', userSchema);
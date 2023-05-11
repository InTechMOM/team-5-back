// const mongoose = require('mongoose');
import mongoose from "mongoose";

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

const user1 = mongoose.model('user1', userSchema); 

user1.create({ firstName: 'Karen', lastName: 'Echavarria', email: 'some@example.com', rol:'student', creationDate: new Date()}, 
    function(err, user1) {
    if (err) return handleError(err);
  });



const User = mongoose.model('User', userSchema);

export default User; 


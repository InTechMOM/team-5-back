const mongoose = require('mongoose')
const Schema = mongoose.Schema

//schema y modelo de mongoose

const userSchema = new Schema({
    firstName: {String, require:true}, 
    lastName: {String, require:true}, 
    email: {String, require:true},
    rol: {String, require:true},
    creationDate: {Date, default: Date.now()},  
})


const User = mongoose.model('User', userSchema); 
export default User; 
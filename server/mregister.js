const mongoose = require('mongoose')
const registerSchema = new mongoose.Schema({
    UserName: {type:String},
    Email:{type:String} ,
    Password: {type:String},
    DateofBrith:{type:String} ,
    OTP:{type:String} ,
    Studentstatus: {type:String}
});
module.exports = mongoose.model('register', registerSchema, 'register');
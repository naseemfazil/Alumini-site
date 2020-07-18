const mongoose =require('mongoose');
const currentSchema = new mongoose.Schema({
    Name: {type:String},
    Department: {type:String},
    Year: {type:String},
    Regno: {type:String},
    Emailid:{type:String},
    Areaofintrest: {type:String},
    CurrentCGPA: {type:String},
    Status: {type : String, default:"A"},
    PersonStatus : {type: String, default:'Current'},
    CreatedAt : {type: Date, default: Date.now()}
});
module.exports = mongoose.model('current', currentSchema, 'current');

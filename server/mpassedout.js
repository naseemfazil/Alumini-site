const mongoose = require('mongoose');
const passedoutSchema = new mongoose.Schema({
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    DOB: {
        type: String
    },
    Yearofpassout: {
        type: String
    },
    WorkingExprience: {
        type: String
    },
    Email:{
        type:String
    },
    WorkingField: {
        type: String
    },
    OnGoingProject: {
        type: String
    },
    PersonStatus: {
        type: String,
        default: 'Passedout'
    },


})
module.exports = mongoose.model('passedout', passedoutSchema, 'passedout');
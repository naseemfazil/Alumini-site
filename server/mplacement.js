const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
    Companyname: { type: String },
    Role: { type: String },
    NoOfvancancy: { type: String },
    Venue: { type: String },
    Requiredskills: { type: String },
    Salary: { type: String }
});

module.exports = mongoose.model('placement', placementSchema, 'placement');
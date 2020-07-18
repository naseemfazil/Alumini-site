
const mongoose = require('mongoose');

const userDemoSchema = new mongoose.Schema({

    name: { type: String },
     email: { type: String }
});

// (export variable, schema variable, model name)
module.exports = mongoose.model('userDemo', userDemoSchema, 'userDemo');


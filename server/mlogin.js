const mongoose = require('mongoose')
const loginShema = new mongoose.Schema({
    Email: { type: String },
    Password: { type: String }

});
module.exports = mongoose.model('login', loginShema, 'login');

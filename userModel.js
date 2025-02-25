const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongotprectice');

const userSchema = mongoose.Schema({
name: String,
usernmae: String,
email:String,


});

module.exports = mongoose.model('User', userSchema);


var mongoose = require('mongoose');

var firstSchema = new mongoose.Schema({
    name:{
        type:String
    }
});
module.exports = mongoose.model('user',firstSchema);
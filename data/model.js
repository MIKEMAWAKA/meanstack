const mongoose = require('mongoose');

const schema  = new mongoose.Schema({
    name:{required:true,type:String},
    age:{required:true,type:String},
    region:{required:true,type:String}

});
///schema collection


module.exports = mongoose.model('Student',schema);
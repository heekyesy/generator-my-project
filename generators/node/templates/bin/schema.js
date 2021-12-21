const mongoose = require('mongoose');
var schema=mongoose.Schema({
    name:String,
    id:Number
})

let db = mongoose.model('newapple',schema);
module.exports = db;
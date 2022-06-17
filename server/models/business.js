/*Assignment 2, 
Express Portfolio
 Muhammad Sabeeh - 301184564 - 2022/06/16*/
 
let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
},
{
    collection: "businessContacts"
});

module.exports = mongoose.model('Business', businessModel);
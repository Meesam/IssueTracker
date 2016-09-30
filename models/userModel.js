var mongoose = require( 'mongoose' );

// Create User Schema
var userSchema=new mongoose.Schema({
    FirstName:{type:String,required:true},
    MiddleName:String,
    LastName:{type:String,required:true},
    UserName:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    Email:{type:String,required:true},
    DOB:Date,
    LastLogin:Date
});
module.exports = mongoose.model('Users',userSchema);

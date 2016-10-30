var mongoose = require( 'mongoose' );

var moduleSchema=new mongoose.Schema({
    MenuName:{type:String,required:true},
    MenuRoute:String
});
module.exports = mongoose.model('Modules',moduleSchema);
